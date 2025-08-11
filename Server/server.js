import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./configs/mongodb.js";
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

connectDB();

// Raw body for webhook route
app.use("/api/webhooks/clerk",
  bodyParser.raw({ type: "application/json" }),
  userRoutes
);

// JSON parser for normal routes
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
