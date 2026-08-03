import express from "express";
import {
  createProduct,
  deleteProduct,
  getCategoryStats,
  getDashboardStats,
  getLowStockProducts,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.controller";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware";

const productRouter = express.Router();

productRouter.post("/create", authMiddleware, isAdmin, createProduct);
productRouter.patch("/update/:id", authMiddleware, isAdmin, updateProduct);
productRouter.delete("/delete/:id", authMiddleware, isAdmin, deleteProduct);

productRouter.get("/getProduct", authMiddleware, getProducts);
productRouter.get("/getSingleProduct/:id", authMiddleware, getSingleProduct);

productRouter.get("/getLowProduct", authMiddleware, getLowStockProducts);
productRouter.get("/dashboard", authMiddleware, getDashboardStats);
productRouter.get("/category-stats", authMiddleware, getCategoryStats);

export default productRouter;
