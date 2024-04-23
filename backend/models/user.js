import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email address'
    }
  },
  password: { type: String, required: true },
  // Add additional fields as needed
}, {
  timestamps: true // Automatically add createdAt and updatedAt timestamps
});

const User = mongoose.model('User', userSchema);
export { User };