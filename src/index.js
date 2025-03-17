// Initialize the server
import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import {connectDB} from './lib/db.js';  // Import the connectDB function from the db.js file
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)


app.listen(PORT, () => {
    console.log('Server is running on PORT:' + PORT);
    connectDB();
});