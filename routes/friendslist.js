import express from "express";
import FriendsList from "../models/FriendsList.js";

const friendRouter = express.Router();

// POST add a friend
friendRouter.post("/", async (req, res) => {
  try {
    const { userId, friendId } = req.body;

    // Check if the friendship already exists
    const existingFriend = await FriendsList.findOne({ userId, friendId });
    if (existingFriend) {
      return res.status(400).json({ error: "Already friends!" });
    }

    // Create a new friend connection
    const newFriend = new FriendsList({ userId, friendId });
    await newFriend.save();

    res.status(201).json(newFriend);
  } catch (err) {
    res.status(500).json({ error: "Failed to add friend." });
  }
});

// GET Get all friends of a user
friendRouter.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Find all friends of the user
    const friends = await FriendsList.find({ userId }).populate(
      "friendId",
      "name profilePicture"
    );

    if (!friends.length) {
      return res.status(404).json({ message: "No friends found." });
    }

    res.status(200).json(friends);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch friends." });
  }
});

// DELETE Delete a friend
friendRouter.delete("/:friendId", async (req, res) => {
  try {
    const { friendId } = req.params;
    const { userId } = req.body; // Require userId in the request body

    // Delete the friend connection
    const deletedFriend = await FriendsList.findOneAndDelete({
      userId,
      friendId,
    });

    if (!deletedFriend) {
      return res.status(404).json({ error: "Friend not found." });
    }

    res.status(200).json({ message: "Friend removed successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove friend." });
  }
});

export default friendRouter;
