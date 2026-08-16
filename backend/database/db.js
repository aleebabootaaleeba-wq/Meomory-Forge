import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.connect()
  .then((client) => {
    console.log("✅ Connected to Local CockroachDB");
    client.release();
  })
  .catch((err) => {
    console.error("❌ CockroachDB connection failed:", err.message);
  });

export default pool;