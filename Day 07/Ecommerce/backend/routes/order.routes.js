import express from "express";
import {
  cancelOrder,
  createOrder,
  createRazorpayOrder,
  getAllOrders,
  getMyOrders,
  getOrderById,
  updateOrderStatus,
  verifyPayment,
} from "../controllers/order.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const orderRouter = express.Router();

orderRouter.post("/", authMiddleware, createOrder);
orderRouter.get("/", authMiddleware, getMyOrders);

// admin
orderRouter.get("/admin", authMiddleware, adminMiddleware, getAllOrders);
orderRouter.patch(
  "/admin/:id/status",
  authMiddleware,
  adminMiddleware,
  updateOrderStatus,
);

// payment
orderRouter.post("/payment/create", authMiddleware, createRazorpayOrder);
orderRouter.post("/payment/verify", authMiddleware, verifyPayment);

orderRouter.get("/:id", authMiddleware, getOrderById);
orderRouter.patch("/:id/cancel", authMiddleware, cancelOrder);

export default orderRouter;
