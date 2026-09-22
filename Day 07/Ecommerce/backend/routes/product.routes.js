import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  updateProductStock,
} from "../controllers/product.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
import upload from "../utils/multer.js";

const productRouter = express.Router();

productRouter.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createProduct,
);
productRouter.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  updateProduct,
);

productRouter.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);
productRouter.patch(
  "/admin/:id/stock",
  authMiddleware,
  adminMiddleware,
  updateProductStock,
);

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getSingleProduct);

export default productRouter;
