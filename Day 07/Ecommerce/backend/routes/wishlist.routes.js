import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  addToWishlist,
  clearWishlist,
  getWishlist,
  removeFromWishlist,
} from "../controllers/wishlist.controller.js";

const wishlistRouter = express.Router();

wishlistRouter.post("/", authMiddleware, addToWishlist);
wishlistRouter.get("/", authMiddleware, getWishlist);
wishlistRouter.delete("/product", authMiddleware, removeFromWishlist);
wishlistRouter.delete("/", authMiddleware, clearWishlist);

export default wishlistRouter;
