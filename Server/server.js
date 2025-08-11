import dotenv from "dotenv";
dotenv.config(); // Load env variables first

import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./Routes/userRoutes.js";
import bodyParser from "body-parser";
import handler from "./controllers/Usercontroller.js";

const app = express(); // ✅ Move this before using app.post()
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use("/webhook", bodyParser.raw({ type: "application/json" }));

// Webhook route
app.post(
  "/clerk-webhook",
  bodyParser.raw({ type: "application/json" }),
  clerkWebhooks
);

// Start server after DB connection
const startServer = async () => {
  await connectDB();

  app.get("/", (req, res) => {
    res.send("API Working");
  });

  app.use("/api/user", userRouter);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
