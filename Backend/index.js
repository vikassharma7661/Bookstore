import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Bookroute from './rautes/Book.raute.js';
import UserRoute from './rautes/userRaute.js'
import cors from 'cors'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
app.use(cors())
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies
// Connect to MongoDB
mongoose.connect(URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(error => console.log("Error:", error));
// Use book route
app.use('/book', Bookroute);
app.use('/user', UserRoute );

app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));