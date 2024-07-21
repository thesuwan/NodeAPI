// Controller functions for user authentication

// Login controller
const login = (req, res, next) => {
    if (req.body) {
        console.log("Login Data Validated Successfully...");
        res.send("Login Data Validated Successfully...");
    } else {
        next(new Error("Login Data is Missing"));
    }
};

// Register controller
const register = (req, res, next) => {
    if (req.body) {
        console.log("Registration Data Validated Successfully...");
        res.send("Registration Data Validated Successfully...");
    } else {
        next(new Error("Registration Data is Missing"));
    }
};

// Forgot Password controller
const forgotPassword = (req, res, next) => {
   
};

// Exporting the controller functions
module.exports = {
    login,
    register,
    forgotPassword
};
