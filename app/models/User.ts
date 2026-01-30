import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
