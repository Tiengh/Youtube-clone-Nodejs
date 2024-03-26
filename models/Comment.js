import mongoose from "mongoose";

const CommentSChema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    videoId: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },

    

}, { timestamps: true, });

export default mongoose.model("Comment", CommentSChema);