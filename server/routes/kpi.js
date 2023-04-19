import express from "express";
import mysql from "mysql2/promise";
// import KPI from "../models/KPI.js";

const router = express.Router();
// const connection = await mysql.createConnection(process.env.DATABASE_URL);

router.get("/monthly", async (req, res) => {
  try {
    // const kpis = await KPI.find();
    // res.status(200).json(kpis);

    const query = "SELECT * FROM monthly_data";
    const [rows] = await connection.query(query);
    res.status(200).json(rows);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
