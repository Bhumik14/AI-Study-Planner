import { Request, Response } from "express";
import jwt from "jsonwebtoken";


import User from '../models/User.model';
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

function generateToken(userId: string) {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "7d" });
}

export const register = async (req: Request, res: Response) =>{
    try {
    const { name, email, password } = req.body;
    console.log(req.body);
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await User.findOne({email});
    if(existing){
      return res.status(400).json({message: "User already exists"});
    }

    const user = new User({ name, email, password });
    await user.save();

    const token = generateToken(user._id.toString());

    res.status(201).json({token, user: {id: user._id, name: user.name, email: user.email}});

  } catch (error: unknown) {
    res.status(500).json({ message: `Error in register controller ${error}` });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id.toString());
    res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error: unknown) {
    res.status(500).json({ message: `Error in login controller ${error}` });
  }
}
