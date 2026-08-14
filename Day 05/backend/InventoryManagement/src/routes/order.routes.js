import express from "express";

import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/order.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const orderRouter = express.Router();

orderRouter.post("/create", authMiddleware, createOrder);

orderRouter.get("/getOrders", authMiddleware, getOrders);

orderRouter.get("/:id", authMiddleware, getOrderById);

orderRouter.put("/:id", authMiddleware, updateOrder);

orderRouter.delete("/:id", authMiddleware, deleteOrder);

export default orderRouter;
