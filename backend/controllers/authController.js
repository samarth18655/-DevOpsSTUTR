import User from "../models/User.js";
import bcrypt from "bcryptjs";

// REGISTER
export const registerUser = async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      role,
    } = req.body;

    const userExists = await User.findOne({
      email,
    });

    if (userExists) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = await User.create({

      name,
      email,
      password: hashedPassword,
      role: role || "student",

    });

    res.status(201).json({

      message: "User registered successfully",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// LOGIN
export const loginUser = async (req, res) => {

  try {

    const {
      email,
      password,
      role,
    } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {

      return res.status(404).json({
        message: "User not found",
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid password",
      });

    }

    // ROLE CHECK
    if (user.role !== role) {

      return res.status(403).json({
        message: `Access denied. You are registered as ${user.role}`,
      });

    }

    res.status(200).json({

      message: "Login successful",

      user: {

        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,

      },

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};