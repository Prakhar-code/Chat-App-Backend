// Initialize the server
import express from 'express';
import authRoutes from './routes/auth.route.js';
import {connectDB} from './lib/db.js';  // Import the connectDB function from the db.js file
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes)


app.listen(PORT, () => {
    console.log('Server is running on PORT:' + PORT);
    connectDB();
});