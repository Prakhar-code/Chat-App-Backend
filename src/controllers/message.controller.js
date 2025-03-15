import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";

const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const users = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(users);
    } catch (error) {
        console.log("Error in getUsersForSidebar controller", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};

const getMessages = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const { id: userToChatId } = req.params;
        const messages = await Message.find({
            $or: [
                { sender: loggedInUserId, receiver: userToChatId },
                { sender: userToChatId, receiver: loggedInUserId }
            ]
        }).sort({ createdAt: 1 });
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};

const sendMessages = async (req, res) => {
    try {
        
        const senderId = req.user._id;
        const { id: receiverId } = req.params;
        const { message, image } = req.body;

        let imageUrl;

        if (image) {
            // upload base64 encoded image to cloudinary
            const userResponse = await cloudinary.uploader.upload(image);
            imageUrl = userResponse.secure_url;
        }

        const newMessage = new Message({
            sender: senderId,
            receiver: receiverId,
            message,
            image: imageUrl,
        });

        await newMessage.save();

        // todo: realtime functionality goes here => spcket.io
        
        
        res.status(201).json(newMessage);
    
    } catch (error) {
        console.log("Error in sendMessages controller", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};

export {
    getUsersForSidebar,
    getMessages,
    sendMessages
};