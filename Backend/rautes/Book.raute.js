import express from 'express'
import {GetBook} from '../controlers/Book.Controler.js'
const router = express.Router();

router.get('/',GetBook)

export default router