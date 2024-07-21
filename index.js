const http = require("http");
const ExpressApp = require("./src/config/express.config");

// Create and start the HTTP server
const server = http.createServer(ExpressApp).listen(8000, "localhost", (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log("Node Server is ACTIVE.......🚩");
    }
});
