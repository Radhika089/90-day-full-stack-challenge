import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URIs);
  } catch (error) {
    console.log("Database connection failed:", error.message);
    process.exit(1);
  }
}
