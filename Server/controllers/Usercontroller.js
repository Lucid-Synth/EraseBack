import { Webhook } from "svix";
import userModel from "../models/usermodel.js";
import connectDB from "../configs/mongodb.js"

export const config = {
  api: {
    bodyParser: false, // Required for Clerk webhook verification
  },
};

export default async function handler(req, res) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return res.status(500).json({ error: "Missing CLERK_WEBHOOK_SECRET" });
  }

  // Read raw body
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString("utf8");

  // Verify signature
  const wh = new Webhook(WEBHOOK_SECRET);
  let event;
  try {
    event = wh.verify(body, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });
  } catch (err) {
    console.error("❌ Webhook verification failed:", err.message);
    return res.status(400).json({ error: "Invalid signature" });
  }

  console.log("📩 Event received:", event.type);

  if (event.type === "user.created") {
    const userData = {
      clerkId: event.data.id,
      email: event.data.email_addresses[0].email_address,
      firstName: event.data.first_name,
      lastName: event.data.last_name,
      photo: event.data.image_url,
    };

    try {
      await connectDB();
      await User.create(userData);
      console.log("✅ User saved:", userData);
    } catch (dbErr) {
      console.error("❌ Database save failed:", dbErr);
    }
  }

  res.status(200).json({ success: true });
}