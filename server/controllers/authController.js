const User = require("../models/User");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      role,
      phone,
      city,
    } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "Please fill all required fields.",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Invalid email address.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password should be at least 6 characters.",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered.",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role,
      phone,
      city,
    });

    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        fullName: user.fullName,
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

module.exports = {
  registerUser,
};