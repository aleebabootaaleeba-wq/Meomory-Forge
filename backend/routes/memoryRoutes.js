import express from "express";

import {
    getMemories,
    addMemory,
    deleteMemory,
    updateMemory
} from "../controllers/memoryController.js";

const router = express.Router();

router.get("/memories", getMemories);

router.post("/memories", addMemory);

router.delete("/memories/:id", deleteMemory);

router.put("/memories/:id", updateMemory);

export default router;