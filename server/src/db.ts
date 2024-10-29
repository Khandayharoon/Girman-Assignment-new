import mongoose, { Document, Schema, Model } from "mongoose";
import * as dotenv from "dotenv";

// Make sure the environment variables are loaded properly.
dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_DB_URL); // Add this line to verify

interface IUser extends Document {
  first_name: string;
  last_name: string;
  city?: string;
  contact_number: string;
  image_link?: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  city: { type: String },
  contact_number: { type: String, required: true },
  image_link: { type: String },
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL as string); // No extra options needed
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export { User, connectDB };
