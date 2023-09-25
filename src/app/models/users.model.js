const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userScheme = new Schema(
  {
    username: {
      type: String,
      unique: [true, "This Username already exists"],
      required: [true, "Username is required"],
      minlength: [3, "Username should be at least 3 characters long"],
      maxlength: [30, "Username should not exceed 30 characters"],
    },
    email: {
      type: String,
      unique: [true, "This Email already exists"],
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    age: {
      type: Number,
      min: [18, "Age must be at least 18"],
      max: [120, "Age cannot exceed 120"],
    },
    image: {
      type: String,
    },
    salary: {
      type: Number,
      min: [0, "Salary cannot be negative"],
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin"],
        message: "Invalid role",
      },
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const userModel = model("User", userScheme);
module.exports = userModel;
