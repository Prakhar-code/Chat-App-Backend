import {v2 as cloudinary} from 'cloudinary';

import {config} from 'dotenv';
import e from 'express';

config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export default cloudinary;
// In the above code snippet, we have created a new file cloudinary.js in the lib folder. This file contains the configuration for the cloudinary library. We have exported the cloudinary object so that it can be used in other parts of the application.
// Compare this snippet from Chat-App-Backend/src/controllers/auth.controller.js: