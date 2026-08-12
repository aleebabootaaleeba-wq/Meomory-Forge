import pool from "../database/db.js";
// ===========================
// Get All Memories
// ===========================
export async function getMemories(req, res) {

    try {

        const result = await pool.query(
            "SELECT * FROM memories ORDER BY created_at DESC"
        );

        res.json({
            success: true,
            data: result.rows
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch memories"
        });

    }

}


// ===========================
// Add Memory
// ===========================
export async function addMemory(req, res) {

    try {

        const { title, content, agent_name } = req.body;

        const result = await pool.query(

            `INSERT INTO memories
            (title, content, agent_name)
            VALUES ($1, $2, $3)
            RETURNING *`,

            [title, content, agent_name]

        );

        res.status(201).json({

            success: true,
            data: result.rows[0]

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Unable to add memory"

        });

    }

}
// ===========================
// Delete Memory
// ===========================
export async function deleteMemory(req, res) {

    try {

        const { id } = req.params;

        const result = await pool.query(

            "DELETE FROM memories WHERE id = $1 RETURNING *",

            [id]

        );

        if (result.rows.length === 0) {

            return res.status(404).json({

                success: false,

                message: "Memory not found"

            });

        }

        res.json({

            success: true,

            message: "Memory deleted successfully",

            data: result.rows[0]

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Failed to delete memory"

        });

    }

}
// ===========================
// Update Memory
// ===========================
export async function updateMemory(req, res) {

    try {

        const { id } = req.params;

        const { title, content, agent_name } = req.body;

        const result = await pool.query(

            `UPDATE memories
             SET title = $1,
                 content = $2,
                 agent_name = $3
             WHERE id = $4
             RETURNING *`,

            [title, content, agent_name, id]

        );

        if (result.rows.length === 0) {

            return res.status(404).json({

                success: false,

                message: "Memory not found"

            });

        }

        res.json({

            success: true,

            message: "Memory updated successfully",

            data: result.rows[0]

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Failed to update memory"

        });

    }

}