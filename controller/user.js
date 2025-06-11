import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user";
import {inngest} from "../inngest/client";


export const signup = async(req,res)=>{
    const {email,password,skills = []} = req.body;

    const hashed = bcrypt.hash(password,10);
    
    const user = await User.create({email,password: hashed, skills});

    
}