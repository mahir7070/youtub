import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'
const videoSchema = new mongoose.Schema({
  videoUrl: {
    type: String, 
    required: true,
  },
  thumbnail: {
    type: String, 
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String, 
    required: true,
  },
  rating: {
    type: Number, 
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  isPublished: {
    type: Boolean, 
    default: true,
  },
  duration: {
    type: Number, 
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId, 
    ref: "User", // Assuming your user model is named "User"
  },
}, { timestamps: true });


videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model('Video', videoSchema);
