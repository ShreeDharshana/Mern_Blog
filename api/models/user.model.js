import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timeStamp: true }
);

const User = mongoose.model("User", userSchema);

export default User;
