import express from "express";

import {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview,
} from "../controllers/review.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const reviewRouter = express.Router();

reviewRouter.post("/product/:id", authMiddleware, createReview);

reviewRouter.get("/product/:id", getProductReviews);

reviewRouter.put("/:id", authMiddleware, updateReview);

reviewRouter.delete("/:id", authMiddleware, deleteReview);

export default reviewRouter;
