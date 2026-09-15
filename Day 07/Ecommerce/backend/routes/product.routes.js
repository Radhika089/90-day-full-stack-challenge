import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const productRouter = express.Router();

productRouter.post("/", authMiddleware, adminMiddleware, createProduct);
productRouter.put("/:id", authMiddleware, adminMiddleware, updateProduct);
productRouter.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getSingleProduct);

export default productRouter;
