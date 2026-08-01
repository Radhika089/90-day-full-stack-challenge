import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware";

const productRouter = express.Router();

productRouter.post("/create", authMiddleware, createProduct);
productRouter.put("/update/:id", authMiddleware, updateProduct);
productRouter.delete("/delete/:id", authMiddleware, isAdmin, deleteProduct);
productRouter.get("/getProduct", authMiddleware, getProducts);

export default productRouter;
