import userModel from "../models/user.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const cookieOption = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
};

export async function registerUser(req, res) {
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
      return res.status(409).json({
        success: false,
        message: "Email is already in use",
      });
    }

    const user = await userModel.create({ name, email, password });

    const token = generateToken(user._id);

    res.cookie("token", token, cookieOption);

    res.status(201).json({
      success: true,
      message: "Registered Successfully!",
      user: { name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export async function loginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid Credentials!",
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

    res.cookie("token", token, cookieOption);

    res.status(200).json({
      success: true,
      message: "Login Successfully!",
      user: { name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export async function logoutUser(req, res) {
  try {
    res
      .clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      })
      .status(200)
      .json({
        success: true,
        message: "Logout Successfully!",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export async function getCurrentUser(req, res) {
  return res.status(200).json({
    success: true,
    user: {
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    },
  });
}
