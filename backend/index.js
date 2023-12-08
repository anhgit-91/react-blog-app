import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// components
import Connection from "./database/db.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();
const app = express();

// Database connection
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

const PORT = 8000;
app.listen(PORT, () =>
    console.log(`Server is running successfully on PORT ${PORT}`)
);

// Routes
app.use("/backend/user", userRoutes);
