import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  firstname: String,
  lastname: String,
  photo: String
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
