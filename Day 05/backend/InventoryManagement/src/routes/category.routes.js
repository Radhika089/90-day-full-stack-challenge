import express from "express";
import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategories,
  getCategoryById,
} from "../controllers/category.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const categoryRouter = express.Router();

categoryRouter.post("/create", authMiddleware, createCategory);
categoryRouter.get("/getCategories", authMiddleware, getCategories);
categoryRouter.get("/:id", authMiddleware, getCategoryById);
categoryRouter.put("/:id", authMiddleware, editCategory);
categoryRouter.delete("/:id", authMiddleware, deleteCategory);

export default categoryRouter;
