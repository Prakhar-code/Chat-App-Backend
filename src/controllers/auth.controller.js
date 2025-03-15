import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import cookie from 'cookie-parser';
import genereteToken from '../lib/utils.js';

const signup = async (req, res) => {
    const {fullName, email, password} = req.body
    try {
        
        if(!fullName || !email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        if (password.length < 6) {
            return res.status(400).json({message: "Password must be atleast 6 characters long"});           
        }

        const user = await User.findOne({email})

        if (user) return res.status(400).json({ message: "Email alreay exists"});
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        })
        
        if(newUser){
            //genereate jwt token
            genereteToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });

        } else {
            res.status(400),json({message: "Invalid user data"});
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};


const login = (req, res) => {
    res.send("Hello from the login route");
}


const logout = (req, res) => {
    res.send("Hello from the logout route");
}

export {signup, login, logout};