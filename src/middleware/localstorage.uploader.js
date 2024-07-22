const multer = require("multer");
const fs = require("fs");

// Configure storage options for multer
const localStorage = multer.diskStorage({
    // Set the destination folder for uploaded files
    destination: (req, file, cb) => {
        const path = "./public/uploads" + req.uploadDir;
        
        // Create the directory if it doesn't exist
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
        }
        cb(null, path);
    }
});

// Create the multer uploader with the specified storage configuration
const uploader = multer({
    storage: localStorage
});

// Middleware function to set the upload directory dynamically
const destinationPath = (path) => {
    return (req, res, next) => {
        req.uploadDir = path; // Set the upload directory on the request object
        next(); // Proceed to the next middleware/route handler
    }
};

module.exports = {
    destinationPath,
    uploader
};
