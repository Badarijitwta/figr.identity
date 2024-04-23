// backend/controllers/authController.js
import { User } from "../models/user.js";
import { authRegisterService, authLoginService } from "../services/authService.js";

const register = async (req, res) => {
  try {
    const result = await authRegisterService(req.body);
    res.json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const result = await authLoginService(req.body);
    res.json(result);
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


const getAllUsers = async (req, res) => {
  let result = await User.find()
  return res.json(result)
}



export { register, login, getAllUsers };
