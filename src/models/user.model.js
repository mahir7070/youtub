import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  email: { // Changed from 'emaill' to 'email'
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  avatar: { // Changed from 'avtar' to 'avatar'
    type: String,
    required: true
  },
  coverImg: { // Changed from 'coverimg' to 'coverImg'
    type: String
  },
  watchHistory: [ // Changed from 'watchhistort' to 'watchHistory'
    {
      type: Schema.Types.ObjectId,
      ref: 'Video'
    }
  ],
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  refreshToken: {
    type: String
  }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password
userSchema.methods.isPasswordCorrect = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Method to generate access token
userSchema.methods.generateAccessToken = function() {
  return jwt.sign(
    {
      id: this.id,
      email: this.email,
      username: this.username,
      fullName: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET, // Fixed the environment variable name
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY // Fixed the environment variable name and option key
    }
  );
};




userSchema.methods.generaterefreshToken = function() {
    return jwt.sign(
      {
        id: this.id,
      },
      process.env.REFRESH_TOKEN_SECRET, // Fixed the environment variable name
      {
        expiresIn: process.env.REFRESH_TOKEN_SECRET // Fixed the environment variable name and option key
      }
    );
  };

export const User = mongoose.model('User', userSchema);
