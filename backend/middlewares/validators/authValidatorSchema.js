import Joi from 'joi'


const registerSchema = Joi.object().keys({
  username: Joi.string().min(5).max(15).pattern(/^[a-z0-9_$]+$/).required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).max(12).required()
})

const loginSchema = Joi.object().keys({
  username: Joi.string().min(5).max(15).pattern(/^[a-z0-9_$]+$/).required(),
  password: Joi.string().required()
})

export { registerSchema, loginSchema }