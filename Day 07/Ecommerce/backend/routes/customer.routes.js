import express from "express";
import {
  getCustomerById,
  getCustomers,
} from "../controllers/customer.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const customerRouter = express.Router();

customerRouter.get("/", authMiddleware, adminMiddleware, getCustomers);

customerRouter.get("/:id", authMiddleware, adminMiddleware, getCustomerById);

export default customerRouter;
