import mongoose from "mongoose";

const friendSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        friendId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    }, { timestamps: true });

    export default mongoose.model("Friend", friendSchema);
