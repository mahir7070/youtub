
// In /other-folder/your-file.js
import { DB_NAME } from '../constants.js';
import mongoose from 'mongoose';
import express from "express";


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB}/${DB_NAME}`);
    console.log(`MongoDB connected on host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;