import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
export const register = async (req,res)=>{
    const {username , email , password } = req.body;
    if(!username || !email || !password || username==='' || email==='' || password===''){
        return res.status(400).json({message : 'All fields are required'});
    }
    const hashpass = await bcryptjs.hashSync(password,10);
    const newUser = new User({
        username,
        email,
        password : hashpass,
    });
    try{
    await newUser.save();
    res.json("Registration Successfull");
    } catch(error){
        res.status(500).json({message : error.message});
    }
}
export default register;