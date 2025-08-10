import dotenv from "dotenv";
dotenv.config(); // Load env variables first

import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Start server after DB connection
const startServer = async () => {
  await connectDB();

  app.get("/", (req, res) => {
    res.send("API Working");
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();