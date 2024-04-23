// // auth.js

// import jwt from "jwt";
// import bcrypt from 'bcryptjs'
// import { User } from "../models/user";
// import process from 'process'

// // Function to register a new user
// const register = async (userData) => {
//   try {
//     // Hash the user's password before saving it to the database
//     const hashedPassword = await bcrypt.hash(userData.password, 10);
//     const newUser = new User({
//       username: userData.username,
//       email: userData.email,
//       password: hashedPassword,
//     });
//     await newUser.save();
//     return { success: true, message: 'User registered successfully' };
//   } catch (error) {
//     console.error('Error registering user:', error);
//     return { success: false, message: 'Error registering user' };
//   }
// };

// // Function to login a user
// const login = async (credentials) => {
//   try {
//     // Find the user by email
//     const user = await User.findOne({ email: credentials.email });
//     if (!user) {
//       return { success: false, message: 'Invalid credentials' };
//     }
//     // Compare the provided password with the hashed password stored in the database
//     const passwordMatch = await bcrypt.compare(credentials.password, user.password);
//     if (!passwordMatch) {
//       return { success: false, message: 'Invalid credentials' };
//     }
//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     return { success: true, token };
//   } catch (error) {
//     console.error('Error logging in user:', error);
//     return { success: false, message: 'Error logging in user' };
//   }
// };

