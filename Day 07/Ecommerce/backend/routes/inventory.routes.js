import express from "express";
import { getInventory } from "../controllers/inventory.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const inventoryRouter = express.Router();

inventoryRouter.get("/", authMiddleware, adminMiddleware, getInventory);

export default inventoryRouter;
