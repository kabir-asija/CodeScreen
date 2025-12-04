import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({quiet: true});

export const connectDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting database");
  }
};

