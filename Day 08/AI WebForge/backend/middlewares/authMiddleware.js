import jwt from "jsonwebtoken";
import userModel from "../models/User.js";

export async function authMiddleware(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "User must be login!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = await userModel.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }
    req.user = user;
    return next();
  } catch (err) {
    console.log("Token invalid", err.message);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token!",
    });
  }
}
