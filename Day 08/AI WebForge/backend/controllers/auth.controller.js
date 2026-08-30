import jwt from "jsonwebtoken";
import userModel from "../models/User.js";

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
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
        message: "Email is already in use.",
      });
    }

    const user = await userModel.create({ name, email, password });

    const token = generateToken(user._id);

    res.cookie("token", token, cookieOptions);

    return res.status(201).json({
      success: true,
      message: "Registered Successful!",
      data: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.log("Server error!");
    return res.status(500).json({
      success: false,
      message: "Server Error!",
    });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    const match = await user.comparePassword(password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials!",
      });
    }

    const token = generateToken(user._id);

    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      success: true,
      message: "Login Successful!",
      data: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.log("Server error!");
    return res.status(500).json({
      success: false,
      message: "Server Error!",
    });
  }
}

export async function logout(req, res) {
  res.cookie("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    max: 0,
    path: "/",
  });

  res.status(200).json({
    success: true,
    message: "Logout Successfully!",
  });
}

export async function me(req, res) {
  return res.status(200).json({
    success: true,
    user: {
      name: req.user.name,
      email: req.user.email,
    },
  });
}
