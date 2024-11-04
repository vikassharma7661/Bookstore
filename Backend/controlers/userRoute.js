import { json } from "express";
import User from "../models/newUser.js"
import bcryptjs from 'bcryptjs'
export const signUp =async (req,res)=>{
   try{
       const {fullName,email,password}= req.body;
       const user = await User.findOne({email})
       if(user){
       return res.status(400).json({message: "this email is already entered"})        
       }
       const hashPassword = await bcryptjs.hash(password , 10)                
       const createUser = new User({
        fullName:fullName,                                                   
        email:email,                                                         
        password:hashPassword                                                          
       })
       await createUser.save()
       res.status(201).json({message: 'successfully registered ',
         user: {
                _id: createUser._id,
                email: createUser.email,
                password: createUser.password
            }
       })
   }catch(error){
    console.log(error.message)
    res.status(500).json({message:"something went wrong"})
   }                                                                     
}
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;  
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email typed' });        
        }
        // Compare passwords
        const isMatched = await bcryptjs.compare(password, user.password);        
        if (!isMatched) {
            return res.status(400).json({ message: 'Invalid password typed' });          
        }                                                                         
        res.status(200).json({
            message: 'Login successfully',
            user: {
                _id: user._id,
                email: user.email,
                password: user.password
            }
        });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Server error" });
    }
}