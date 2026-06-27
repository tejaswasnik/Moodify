const userModel = require("../models/user.model");
const blacklistModel = require("../models/blacklist.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  const { username, email, password } = req.body;
  const isAlreadyRegistered = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (isAlreadyRegistered) {
    res.status(409).json({
      message: "User Already Exists",
    });
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie(token);
  return res.status(200).json({
    message: "User Registered Successfully",
    user,
    token,
  });
}

async function login(req, res) {
  const { username, email, password } = req.body;
  const user = await userModel
    .findOne({
      $or: [{ username }, { email }],
    })
    .select("+password");
  if (!user) {
    res.status(404).json({
      message: "User not found.",
    });
  }
  const isPasswordValid = await bcryptjs.compare(password, user.password);
  if (!isPasswordValid) {
    res.status(400).json({
      message: "Invalid Credentials",
    });
  }
  const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("token", token);
  res.status(200).json({
    message: "LoggedIn Successfully.",
    user,
    token,
  });
}

async function getMe(req, res) {
  const user = await userModel.findById(req.user.userId);
  if (!user) {
    return res.status(404).json({
      message: "User not found.",
    });
  }
  res.status(200).json({
    message: "User fetched successfully.",
    user,
  });
}

async function logoutUser(req, res) {
  const token = req.cookies.token;
  res.clearCookie("token");
  const blacklistedToken = await blacklistModel.create({
    token,
  });
  res.status(200).json({
    message: "Logged Out Successfully",
  });
}
module.exports = { register, login, getMe , logoutUser};
