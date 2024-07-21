const Joi = require('joi');

// Schema for login data validation
const loginDataTransObj = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

// Schema for registration data validation
const registerDataTransObj = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
});

// Schema for forgot password data validation
const forgotPasswordDataTransObj = Joi.object({
    email: Joi.string().email().required()
});

module.exports = {
    loginDataTransObj,
    registerDataTransObj,
    forgotPasswordDataTransObj
};
