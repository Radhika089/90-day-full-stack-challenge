import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const cartRouter = express.Router();

cartRouter.post("/", authMiddleware, adminMiddleware, createProduct);
cartRouter.put("/:id", authMiddleware, adminMiddleware, updateProduct);
cartRouter.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);

cartRouter.get("/", getAllProducts);
cartRouter.get("/:id", getSingleProduct);

export default cartRouter;
