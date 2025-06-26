import express from 'express';
// import { getMe, login, register } from '../controllers/auth.controller.js';
import * as authController from '../controllers/auth.controller.js';
import { loginSchema, registerSchema, validate } from '../validations/validator.js';
import tryCatch from '../utils/try-catch.util.js';
import authenticate from '../middlewares/authenticate.middleware.js';

const authRoute = express.Router()

authRoute.post('/login',validate(loginSchema),tryCatch(authController.login))
authRoute.post('/register',validate(registerSchema), authController.registerYup)
authRoute.get('/me', authenticate, authController.getMe)

export default authRoute