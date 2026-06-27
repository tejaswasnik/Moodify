const express = require("express");
const AuthRouter = express.Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
AuthRouter.post("/register", authController.register);
AuthRouter.post("/login", authController.login);
AuthRouter.get("/getme", authMiddleware.authUser, authController.getMe);
AuthRouter.post("/logout", authController.logoutUser);
module.exports = AuthRouter;
