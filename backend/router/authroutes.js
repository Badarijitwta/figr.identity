import express from "express"
import { validateLogin, validateRegister } from "../middlewares/authValidator.js"
import { register, login, getAllUsers } from "../controllers/authController.js"

const authrouter = express.Router()

authrouter.post('/register', validateRegister, register)
authrouter.post('/login', validateLogin, login)
authrouter.get('/', getAllUsers)

export default authrouter