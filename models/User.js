import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      maxlength: 150
    },
    image: {
      type: String
    },
    profilePicture: {
      type: String,
      default: ''
    },
  },
  {
    timestamps: true
  }
);

export default mongoose.model("User", userSchema);
