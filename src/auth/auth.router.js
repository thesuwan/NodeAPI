const express = require("express");
const authRouter = express.Router();

const { login, register, forgotPassword } = require("./auth.controller");
const { loginDataTransObj, registerDataTransObj, forgotPasswordDataTransObj } = require('./auth.schema');
const { validChecker } = require('../middleware/validator');

// Route for login
authRouter.post("/login", validChecker(loginDataTransObj), login);

// Route for registration
authRouter.post("/register", validChecker(registerDataTransObj), register);

// Route for forgot password
authRouter.post("/forgotPassword", validChecker(forgotPasswordDataTransObj), forgotPassword);

module.exports = authRouter;
