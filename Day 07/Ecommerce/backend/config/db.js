import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}
