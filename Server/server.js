import dotenv from "dotenv";
dotenv.config(); // Load env variables first

import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./Routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

// Start server after DB connection
const startServer = async () => {
  await connectDB();

  app.get("/", (req, res) => {
    res.send("API Working");
  });



  app.use('/api/user',userRouter)

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();