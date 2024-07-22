const Joi = require('joi');

// Middleware for validating request data against a given schema
const validChecker = (schema) => {
    return async (req, res, next) => {
        try {
            const data = req.body;
            // Validate data against the schema
            await schema.validateAsync(data, { abortEarly: false });
            next(); // Proceed to the next middleware or route handler if validation is successful
        } catch (exception) {
            // Construct an error object from the validation error details
            const error = {};
            exception.details.map((value) => {
                error[value.context.key] = value.message;
            });
            // Pass the error object to the error handling middleware
            next({
                code: 400,
                detail: error,
                message: "ValidationFailed",
                status: "VALIDATION_FAILED"
            });
        }
    };
};

module.exports = { validChecker };
