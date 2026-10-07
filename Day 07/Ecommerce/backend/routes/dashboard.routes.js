import express from "express";
import { getDashboard } from "../controllers/dashboard.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/", authMiddleware, adminMiddleware, getDashboard);

export default dashboardRouter;
