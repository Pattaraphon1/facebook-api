import express from 'express';
// import { getMe, login, register } from '../controllers/auth.controller.js';
import * as authController from '../controllers/auth.controller.js';
import { loginSchema, registerSchema, validate } from '../validations/validator.js';
import tryCatch from '../utils/try-catch.util.js';

const authRoute = express.Router()

authRoute.post('/login',validate(loginSchema),tryCatch(authController.login))
authRoute.post('/register',validate(registerSchema), authController.registerYup)
authRoute.get('/me', authController.getMe)

export default authRoute