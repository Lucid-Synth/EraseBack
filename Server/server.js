import dotenv from "dotenv";
dotenv.config(); // Load env variables first

import { connectDB } from '../config/db.js';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API WORKING' });
});

connectDB();

export default app;