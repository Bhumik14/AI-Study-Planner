import express, {Request, Response} from 'express';
import {register, login} from '../controllers/auth.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = express.Router();


router.post('/register', register);
router.post('/login', login);

export default router;

