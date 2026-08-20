import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "backend/.env.local" });

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/api/apod", async (req, res) => {
    try {
        const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`NASA API error: ${response.status}`);
        }

        const data = await response.json();

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to load APOD data" });
    }
});

app.get("/api/epic", async (req, res) => {
    try {
        const response = await fetch(
            `https://api.nasa.gov/EPIC/api/enhanced?api_key=${process.env.NASA_API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`NASA API error: ${response.status}`);
        }

        const data = await response.json();

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to load EPIC data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});