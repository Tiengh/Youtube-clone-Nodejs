import mongoose from "mongoose";

const UserSChema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
    },
    img: {
        type: String,
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    subscribedUsers: {
        type:[String]
    },
    fromGoogle: {
        type:Boolean,
        default: false,
    }

}, { timestamps: true, });

export default mongoose.model("User", UserSChema);