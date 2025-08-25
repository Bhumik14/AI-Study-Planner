import express from 'express';
import cors from "cors";
import authRoutes from './routes/auth.routes';
import { authMiddleware } from './middlewares/auth.middleware';
const app = express();




app.use(cors({
  origin: "http://localhost:5173",  // frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use('/api/auth', authRoutes);

export default app;
