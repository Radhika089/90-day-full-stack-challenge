import express from "express";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import productRouter from "./routes/product.routes.js";
import cors from "cors";
import categoryRouter from "./routes/category.routes.js";
import orderRouter from "./routes/order.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", userRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/order", orderRouter);

export default app;
