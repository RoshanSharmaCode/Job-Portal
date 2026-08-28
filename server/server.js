import express from "express";
import cors from "cors";
import 'dotenv/config';
import conectDB from "./config/db.js";

// Initialize Express
const app = express();

// Connect to database

await conectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('API Working'));

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

