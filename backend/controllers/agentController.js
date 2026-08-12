import pool from "../database/db.js";

export async function getAgents(req, res) {
    try {
        const result = await pool.query(
            "SELECT * FROM agents ORDER BY id ASC"
        );

        res.json({
            success: true,
            data: result.rows
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch agents"
        });
    }
}

export async function addAgent(req, res) {

    try {

        const { name, role, status } = req.body;

        const result = await pool.query(
            `INSERT INTO agents(name, role, status)
             VALUES($1,$2,$3)
             RETURNING *`,
            [name, role, status]
        );

        res.status(201).json({
            success: true,
            data: result.rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Unable to add agent"
        });

    }

}export async function deleteAgent(req, res) {

    try {

        const { id } = req.params;

        await pool.query(
            "DELETE FROM agents WHERE id = $1",
            [id]
        );

        res.json({
            success: true,
            message: "Agent deleted successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to delete agent"
        });

    }

}
export async function updateAgent(req, res) {

    try {

        const { id } = req.params;

        const { name, role, status } = req.body;

        const result = await pool.query(

            `UPDATE agents
             SET name = $1,
                 role = $2,
                 status = $3
             WHERE id = $4
             RETURNING *`,

            [name, role, status, id]

        );

        res.json({

            success: true,

            data: result.rows[0]

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Unable to update agent"

        });

    }

}