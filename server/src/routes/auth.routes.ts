import express, {Request, Response} from 'express';
import {register, login} from '../controllers/auth.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { generateToken } from '../controllers/auth.controller';
import passport from 'passport';
const router = express.Router();



router.post('/register', register);
router.post('/login', login);

router.get('/google', passport.authenticate("google", {scope: ["profile", "email"]}));

router.get(
  "google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }), // 👈 disable session
  (req, res) => {
    // req.user comes from GoogleStrategy
    const user = req.user as any;
    const token = generateToken(user._id.toString());

    // Redirect with token (or send as JSON)
    res.json({ token, user });
  }
);
export default router;

