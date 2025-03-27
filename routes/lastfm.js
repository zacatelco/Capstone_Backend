import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const lastfmRouter = express.Router();

// Define the route to fetch data from Last.fm API
lastfmRouter.get('/top-artists/:username', async (req, res) => {
  const { username } = req.params;
  const apiKey = process.env.MUSIC_API;  // Load the API key from environment variables

  try {
    const response = await axios.get('https://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'user.getTopArtists',
        user: username,
        api_key: apiKey,
        format: 'json',
      },
    });
    res.json(response.data.topartists.artist);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Last.fm' });
  }
});


// Fetch Top Songs
lastfmRouter.get("/top-songs", async (req, res) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                method: "chart.gettoptracks",
                api_key: API_KEY,
                format: "json",
            },
        });
        res.json(response.data.tracks.track);
    } catch (error) {
        console.error("Error fetching top songs:", error);
        res.status(500).json({ error: "Failed to fetch top songs" });
    }
});

export default lastfmRouter;