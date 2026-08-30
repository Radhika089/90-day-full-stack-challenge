import express from "express";
import { login, logout, me, register } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/me", authMiddleware, me);

export default authRouter;
