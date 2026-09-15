import jwt from "jsonwebtoken";
import userModel from "../models/user.js";

const jwtToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });
};

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export async function register(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email is already in use!",
      });
    }

    const user = await userModel.create({
      name,
      email,
      password,
    });

    const token = jwtToken(user._id);

    res.cookie("token", token, cookieOptions);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { user: user.name, email: user.email },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const match = await user.comparePassword(password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwtToken(user._id);

    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      success: true,
      message: "User login successfully",
      data: { user: user.name, email: user.email },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
