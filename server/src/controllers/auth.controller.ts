import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import { Strategy as GoogleStrategy, Profile, VerifyCallback } from "passport-google-oauth20";
import User, { IUser } from "../models/User.model";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export function generateToken(userId: string) {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "7d" });
}

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();

    const token = generateToken(user._id.toString());

    res
      .status(201)
      .json({
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
  } catch (error: unknown) {
    res.status(500).json({ message: `Error in register controller ${error}` });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id.toString());
    res
      .status(200)
      .json({
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
  } catch (error: unknown) {
    res.status(500).json({ message: `Error in login controller ${error}` });
  }
};

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ): Promise<void> => {
      try {
        // Look up existing user
        let user: IUser | null = await User.findOne({ googleId: profile.id });

        // Create if doesn't exist
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails?.[0]?.value,
            password: undefined, // No password for Google-authenticated users
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err as Error, undefined);
      }
    }
  )
);
