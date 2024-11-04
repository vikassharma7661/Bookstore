// import Book from '../models/Book.modal.js'

// export const GetBook = async (req,res)=>{
 
//     try{
//         const book = await Book.find({ });
//         res.status(200).json(book);

//     } catch(error){
//         console.log("Error: " , error)
//     }
// }
import Book from '../models/Book.modal.js';

export const GetBook = async (req, res) => {

    try {
        const book = await Book.find()
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

 