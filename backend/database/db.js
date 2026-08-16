import dotenv from "dotenv";
dotenv.config();

import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true
    }
});

pool.connect()
    .then((client) => {
        console.log("✅ Connected to CockroachDB");
        client.release();
    })
    .catch((err) => {
        console.error("❌ Database Connection Failed");
        console.error(err);
    });

export default pool;