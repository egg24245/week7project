import express from "express";
import cors from "cors";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", (req, res) => {
  res.send("Welcome to the Wildlife API!");
});

app.get("/wildlife", async (req, res) => {
  const result = await pool.query("SELECT * FROM wildlife");
  res.json(result.rows);
});

app.post("/wildlife", async (req, res) => {
  const { name, species, location, image_url } = req.body;
  const result = await pool.query(
    "INSERT INTO wildlife (name, species, location, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, species, location || null, image_url || null]
  );
  res.status(201).json(result.rows[0]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
