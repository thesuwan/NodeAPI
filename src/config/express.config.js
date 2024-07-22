const express = require("express");
const app = express();
const routerConfig = require("./router.config");

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Mount the router configuration
app.use(routerConfig);

// Middleware to handle 404 errors
app.use((req, res, next) => {
    next({
        code: 404,
        detail: "404_Error: Page Not Found",
        message: "Page Not Found",
        status: "NOT_FOUND"
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    if (error) {
        console.log(error.message); 
        res.status(error.code).json({
            result: error.detail,
            meta: null,
            message: error.message,
            status: error.status
        });
    }
});

module.exports = app;
