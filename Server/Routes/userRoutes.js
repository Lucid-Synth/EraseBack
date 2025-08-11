import express from "express";
import { clerkWebhooks } from "../controllers/Usercontroller.js";

const router = express.Router();

router.post("/clerk-webhook", clerkWebhooks);

export default router;
