import express from "express";
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
// import KPI from "./models/KPI.js";
import mysql from "mysql2/promise";
// import { kpis } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
// app.use("/kpi", kpiRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })

const connection = await mysql.createConnection(process.env.DATABASE_URL);
// .then(async () => {
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

/* ADD DATA ONE TIME OR AS NEEDED */
// await mongoose.connection.db.dropDatabase();
// KPI.insertMany(kpis);
// })
// .catch((error) => console.log(`${error} did not connect`));

app.get("/monthly", async (req, res) => {
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
