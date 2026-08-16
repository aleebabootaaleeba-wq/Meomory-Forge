import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// CockroachDB connection
const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 26257,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  // Required for CockroachDB Cloud / SSL connections
  ssl: process.env.DB_SSL === "true"
    ? {
        rejectUnauthorized: false,
      }
    : false,
});

// Test database connection
pool
  .connect()
  .then((client) => {
    console.log("✅ Connected to CockroachDB");
    client.release();
  })
  .catch((error) => {
    console.error("❌ CockroachDB connection failed:");
    console.error(error.message);
  });

// Export pool for controllers/routes
export default pool;