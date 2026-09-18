import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  addToCart,
  clearCart,
  getCart,
  removeFromCart,
  updateCart,
} from "../controllers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.post("/", authMiddleware, addToCart);
cartRouter.get("/", authMiddleware, getCart);
cartRouter.put("/", authMiddleware, updateCart);
cartRouter.delete("/item", authMiddleware, removeFromCart);
cartRouter.delete("/", authMiddleware, clearCart);

export default cartRouter;
