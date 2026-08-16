import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import "./database/db.js";

import statusRoutes from "./routes/statusRoutes.js";
import memoryRoutes from "./routes/memoryRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/status", statusRoutes);
app.use("/api", memoryRoutes);

// Home route
app.get("/", (req, res) => {
    res.json({
        project: "MemoryForge",
        version: "1.0.0",
        status: "Running"
    });
});

// Start server locally
app.listen(PORT, () => {
    console.log(`🚀 MemoryForge Backend Running on http://localhost:${PORT}`);
});

export default app;