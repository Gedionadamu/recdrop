
import User from "../models/user.js";
import bcryptjs from "bcryptjs"


export const signup = async (req, res,next)=>{
    const { username,email,password } = req.body;
    
    const hashedPassword = bcryptjs.hashSync(password,8)
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save()
    res.status(201).json({ message: "user created"});
    }
    catch(error){
        next(error);
    }
     
} 