import express from "express";
import {
  cancelOrder,
  createOrder,
  getAllOrders,
  getMyOrders,
  getOrderById,
} from "../controllers/order.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const orderRouter = express.Router();

orderRouter.post("/", authMiddleware, createOrder);
orderRouter.get("/", authMiddleware, getMyOrders);
orderRouter.get("/:id", authMiddleware, getOrderById);
orderRouter.patch("/:id/cancel", authMiddleware, cancelOrder);

orderRouter.get("/admin", authMiddleware, adminMiddleware, getAllOrders);

export default orderRouter;
