import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  photo: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  creditBalance: {
    type: Number,
    default: 20
  }
}, { timestamps: true });

// Use mongoose.models to prevent recompiling in dev mode
const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
