import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { inngest } from "../inngest/client";

export const signup = async (req, res) => {
  const { email, password, skills = [] } = req.body;

 try{
     const hashed = bcrypt.hash(password, 10);

  const user = await User.create({ email, password: hashed, skills });

  //INNGEST FIRE

  await inngest.send({
    name: user / signup,
    data: {
      email,
    },
  });

  const jwt = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET
  );
 }catch(error){
    console.error("Error in inngest event", error.message);
 }
};
