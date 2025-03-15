import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

export {connectDB};
// In the above code snippet, we have created a new file db.js in the lib folder. This file contains a function called connectDB that connects to the MongoDB database using the mongoose library. We have exported this function so that it can be used in other parts of the application.