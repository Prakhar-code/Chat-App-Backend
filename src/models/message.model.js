import e from "express";
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        message:{
            type: String,
            required: true
        },
        image: {
            type: String,
        },
    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
// In the above code snippet, we have created a new file message.model.js in the models folder. This file contains a message schema using the mongoose library. We have exported the Message model so that it can be used in other parts of the application.