import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,  // Reference to User model
            ref: "User",
            required: true,
        },
        content: {
            type: String,
            required: true
        },
        comments: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Comment" }
        ]
    },
    {
        timestamps: true
    }
);
export default mongoose.model("Post", postSchema);



// postSchema.index({ author: 1 });
// REQUIRED VALUE AUTO GENS INDEX
