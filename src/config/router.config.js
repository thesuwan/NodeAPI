const express = require('express');
const routerConfig = express.Router();

const authRouter = require("../auth/auth.router");

// Use the authRouter for authentication-related routes
routerConfig.use(authRouter);

module.exports = routerConfig;
