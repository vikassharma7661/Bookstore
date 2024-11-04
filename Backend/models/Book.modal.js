import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    name: String,
    prize: Number,
    category:String,
    title: String,
    image: String
})

const Book = mongoose.model('Book', BookSchema)

export default Book;