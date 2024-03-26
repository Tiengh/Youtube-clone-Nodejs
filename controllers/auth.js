import mongoose from "mongoose";
import User from "../models/User.js"
import { createError } from "../error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

export const signup = async (req, res, next) => {

    try{
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(req.body.password, salt); 
        const newUser = new User({...req.body, password: hash});

        await newUser.save();
        res.status(200).send("User has been created!");
    }catch(err){
        next(err);
    }
}

export const login = async (req, res, next) => {

    try{
        const user = await User.findOne({name:req.body.name});
        if(!user) return next(createError(404,"User not found!"));

        const isCorrect = await bcryptjs.compare(req.body.password, user.password);

        if(!isCorrect) return next(createError(400, "Wrong password!"));

        const token = jwt.sign({id:user._id}, process.env.JWT);
        const {password, ...others} = user._doc;

        res.cookie("access_token", token,{
            httpOnly:true,
        })
        .status(200)
        .json(others);
          
    }catch(err){
        next(err);
    }
}