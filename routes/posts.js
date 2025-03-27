// import express from "express";
// import Post from "../models/Posts.js"

// const postRouter = express.Router();

// // POST create a post 
// postRouter.post("/", async (req, res) => {
//     try {
//         const { author, content } = req.body;  // Destructure from request body

//         if (!author) {
//             return res.status(400).json({ error: "Author is required" });
//         }

//         const post = new Post({
//             author: author,  
//             content: content
//         });

//         await post.save();
//         res.status(201).json(post);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });



// // GET get all post
// postRouter.get("/", async (req, res) => {
//     try {
//         const posts = await Post.find();
//         res.json(posts);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// })

// // GET a specific post
// postRouter.get("/:id", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         res.json(post);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// })

// // PATCH Update a posts details
// postRouter.patch("/:id", async (req, res) => {
//     try {
//         const updatePost = await Post.findByIdAndUpdate(
//             req.params.id, // Use params instead of req.body.id
//             { $set: req.body },
//             { new: true, runValidators: true }
//         );

//         if (!updatePost) {
//             return res.status(404).json({ message: "Post not found" });
//         }

//         res.json(updatePost);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


// // DELETE Delete a Post by ID
// postRouter.delete("/:id", async (req, res) => {
//     try {
//         const deletedPost = await Post.findByIdAndDelete(req.params.id);

//         if (!deletedPost) {
//             return res.status(404).json({ message: "Post not found" });

//         } res.json({ message: "Post deleted successfully" });

//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// })

// export default postRouter

import express from "express";
import Post from "../models/Posts.js";
import User from "../models/User.js"; // Make sure to import User model
import Comment from "../models/Comments.js"; // Import the Comment model if necessary

const postRouter = express.Router();

// POST create a post
postRouter.post("/", async (req, res) => {
    try {
        const { author, content } = req.body; // Destructure from request body

        if (!author) {
            return res.status(400).json({ error: "Author is required" });
        }

        const post = new Post({
            author: author,
            content: content
        });

        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET all posts (with populated author and comments)
postRouter.get("/", async (req, res) => {
    try {
        // Populate 'author' and 'comments' fields
        const posts = await Post.find()
            .populate('author', 'username') // Populate the 'author' with only the username field
            .populate('comments', 'author content') // Populate the 'comments' with 'author' and 'content' fields
            .exec(); // Ensure the query is executed

        res.json(posts); // Send the populated posts
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET a specific post
postRouter.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('author', 'username') // Populate the author data for the specific post
            .populate('comments', 'author content') // Populate the comments data for the specific post
            .exec();

        res.json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PATCH update post details
postRouter.patch("/:id", async (req, res) => {
    try {
        const updatePost = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatePost) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json(updatePost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE a post by ID
postRouter.delete("/:id", async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default postRouter;
