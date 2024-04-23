import { registerSchema, loginSchema } from "./validators/authValidatorSchema.js";

const validateRegister = async (req, res, next) => {
  try {
    await registerSchema.validateAsync(req.body);
    next()
  }
  catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const validateLogin = async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export { validateRegister, validateLogin }