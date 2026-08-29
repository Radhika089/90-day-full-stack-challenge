import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Db connected successfully!");
  } catch (err) {
    console.log("DB connection failed");
    process.exit(1);
  }
}
