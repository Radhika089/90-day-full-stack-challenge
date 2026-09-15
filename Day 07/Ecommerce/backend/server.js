import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/db.js";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

await dbConnect();

const app = express();

app.get("/", (req, res) => {
  res.send("Working");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running");
});
