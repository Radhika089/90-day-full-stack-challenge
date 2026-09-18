import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/db.js";
import dns from "dns";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

await dbConnect();

const app = express();

app.get("/", (req, res) => {
  res.send("Working");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running");
});
