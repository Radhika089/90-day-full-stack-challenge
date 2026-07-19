import express from "express";
import createProduct, { getProduct } from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter.post("/create", createProduct);
productRouter.get("/", getProduct);

export default productRouter;
