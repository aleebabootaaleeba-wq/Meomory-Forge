import "dotenv/config";
import express from "express";
import cors from "cors";

import "./database/db.js";
import statusRoutes from "./routes/statusRoutes.js";
import memoryRoutes from "./routes/memoryRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/status", statusRoutes);
app.use("/api", memoryRoutes);

app.get("/", (req, res) => {
    res.json({
        project: "MemoryForge",
        version: "1.0.0",
        status: "Running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 MemoryForge Server running on port ${PORT}`);
});