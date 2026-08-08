import express from "express";
import {
  createProduct,
  deleteProduct,
  getCategoryStats,
  getDashboardStats,
  getLowStockProducts,
  getOutOfStockProducts,
  getProducts,
  getProductsByCategory,
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
productRouter.get("/out-of-stock", authMiddleware, getOutOfStockProducts);
productRouter.get("/dashboard", authMiddleware, getDashboardStats);
productRouter.get("/category-stats", authMiddleware, getCategoryStats);
productRouter.get("/category/:category", authMiddleware, getProductsByCategory);

export default productRouter;
