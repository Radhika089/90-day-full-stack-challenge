import express from "express";
import {
  createProduct,
  deleteProduct,
  getLowStockProducts,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.controller";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware";

const productRouter = express.Router();

productRouter.post("/create", authMiddleware, isAdmin, createProduct);
productRouter.put("/update/:id", authMiddleware, isAdmin, updateProduct);
productRouter.delete("/delete/:id", authMiddleware, isAdmin, deleteProduct);
productRouter.get("/getProduct", authMiddleware, getProducts);
productRouter.get("/getLowProduct", authMiddleware, getLowStockProducts);
productRouter.get("/getSingleProduct/:id", authMiddleware, getSingleProduct);

export default productRouter;
