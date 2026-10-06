import express from "express";

import {
  createCategory,
  deleteCategory,
  getCategories,
  getSingleCategory,
  updateCategory,
} from "../controllers/category.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const categoryRouter = express.Router();

categoryRouter.post("/", authMiddleware, adminMiddleware, createCategory);

categoryRouter.get("/", getCategories);

categoryRouter.get("/:id", getSingleCategory);

categoryRouter.put("/:id", authMiddleware, adminMiddleware, updateCategory);

categoryRouter.delete("/:id", authMiddleware, adminMiddleware, deleteCategory);

export default categoryRouter;
