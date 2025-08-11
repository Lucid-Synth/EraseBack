import { Webhook } from "svix";
import userModel from "../models/usermodel.js";

const clerkWebhooks = async (req, res) => {
  try {
    console.log("🔹 Webhook hit!");

    const payload = req.body.toString("utf8");
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const event = whook.verify(payload, headers);

    console.log("✅ Verified event:", event.type);
    console.log("📦 Event data:", event.data);

    const { data, type } = event;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address || null,
          firstname: data.first_name || "",
          lastname: data.last_name || "",
          photo: data.image_url || data.profile_image_url || null,
        };
        console.log("💾 Saving to DB:", userData);
        await userModel.create(userData);
        break;
      }
      case "user.updated": {
        const updatedData = {
          email: data.email_addresses?.[0]?.email_address || null,
          firstname: data.first_name || "",
          lastname: data.last_name || "",
          photo: data.image_url || data.profile_image_url || null,
        };
        console.log("🔄 Updating DB:", updatedData);
        await userModel.findOneAndUpdate({ clerkId: data.id }, updatedData);
        break;
      }
      case "user.deleted": {
        console.log("🗑 Deleting from DB:", data.id);
        await userModel.findOneAndDelete({ clerkId: data.id });
        break;
      }
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export { clerkWebhooks };
