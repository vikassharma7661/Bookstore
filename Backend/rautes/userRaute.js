import express from 'express';
import {signUp, Login } from '../controlers/userRoute.js'
const router = express.Router()
router.post('/signup' ,signUp)
router.post('/login' , Login)
export default router