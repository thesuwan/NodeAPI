const express = require("express");
const authRouter = express.Router();
const { login, register, forgotPassword } = require("./auth.controller");
const { loginDataTransObj, registerDataTransObj, forgotPasswordDataTransObj } = require('./auth.schema');
const { validChecker } = require('../middleware/validator');
//const {destinationPath, uploader} = require("../middleware/localstorage.uploader")
const { upload } = require('../config/cloudinary.config')
// Route for login
authRouter.post("/login", validChecker(loginDataTransObj), login);

// Route for registration
authRouter.post("/register", upload.single('image'), validChecker(registerDataTransObj), register);

// Route for forgot password
authRouter.post("/forgotPassword", validChecker(forgotPasswordDataTransObj), forgotPassword);

module.exports = authRouter;
