import { Webhook } from "svix";
import userModel from "../models/usermodel.js";

const clerkWebhooks = async (req, res) => {
  try {
    // Create a new Svix Webhook instance with your Clerk secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Convert raw buffer to string (raw body middleware must be used)
    const payload = req.body.toString("utf8");

    // Verify the signature from Clerk
    whook.verify(payload, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    // Parse the event data
    const event = JSON.parse(payload);
    const { data, type } = event;

    switch (type) {
      case "user.created":
        await userModel.create({
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address || "",
          firstname: data.first_name || "",
          lastname: data.last_name || "",
          photo: data.image_url || "",
        });
        break;

      case "user.updated":
        await userModel.findOneAndUpdate(
          { clerkId: data.id },
          {
            email: data.email_addresses?.[0]?.email_address || "",
            firstname: data.first_name || "",
            lastname: data.last_name || "",
            photo: data.image_url || "",
          }
        );
        break;

      case "user.deleted":
        await userModel.findOneAndDelete({ clerkId: data.id });
        break;
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export { clerkWebhooks };
