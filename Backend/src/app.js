require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const AuthRouter = require("./routes/auth.routes");
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", AuthRouter);
module.exports = app;
