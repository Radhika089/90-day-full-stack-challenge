import dns from "dns";
dns.setServers(["8.8.8.8"]);

import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDb } from "./config/db.js";

connectDb();
const app = express();

app.use(cors({ origin: process.env.ORIGINS.split(","), credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is running");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
