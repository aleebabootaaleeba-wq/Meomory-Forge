import express from "express";

import {
    getAgents,
    addAgent,
    deleteAgent,
    updateAgent
} from "../controllers/agentController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        status: "Online",
        message: "MemoryForge backend is running"
    });
});

router.get("/agents", getAgents);

router.post("/agents", addAgent);

router.delete("/agents/:id", deleteAgent);

router.put("/agents/:id", updateAgent);

export default router;