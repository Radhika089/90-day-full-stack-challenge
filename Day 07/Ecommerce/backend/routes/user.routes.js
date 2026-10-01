import express from "express";
import { login, logout, me, register } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.get("/me", authMiddleware, me);

export default userRouter;
