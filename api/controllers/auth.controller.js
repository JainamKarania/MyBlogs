import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorhandler } from "../utils/error.js";
export const register = async (req,res,next)=>{
    const {username , email , password } = req.body;
    if(!username || !email || !password || username==='' || email==='' || password===''){
        next(errorhandler(400,'All feilds are required'));
    }
    const hashpass = bcryptjs.hashSync(password,10);
    const newUser = new User({
        username,
        email,
        password : hashpass,
    });
    try{
    await newUser.save();
    res.json("Registration Successfull");
    } catch(error){
        next(error);
    }
}
