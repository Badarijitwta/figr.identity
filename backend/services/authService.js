import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.js';

import process from 'process'

async function authRegisterService(userData) {

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = new User({
    username: userData.username,
    email: userData.email,
    password: hashedPassword,
  });
  await newUser.save();
  return newUser;
}

async function authLoginService(credentials) {


  const user = await User.findOne({ username: credentials.username });
  if (!user) {
    return { success: false, message: 'Please enter the valid EmailId' };
  }
  const passwordMatch = await bcrypt.compare(credentials.password, user.password);
  if (!passwordMatch) {
    return { success: false, message: 'Password Incorrect' };
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { success: true, token }
}


export { authRegisterService, authLoginService }