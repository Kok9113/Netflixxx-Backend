import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB:", ENV_VARS.MONGO_URI); // Kiểm tra log
    await mongoose.connect(ENV_VARS.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MONGODB:", error.message);
    process.exit(1);
  }
};
