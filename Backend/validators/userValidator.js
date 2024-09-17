const Joi = require('joi');

// Register Validator
const registerValidator = async (req, res, next) => {
    const registerSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        phoneNumber: Joi.string().pattern(/^[0-9]+$/).min(10).required()
    });

    const { error } = registerSchema.validate(req.body);
    if (error) {
        return res.status(422).json({ errors: error.details.map(err => err.message) });
    }
    next();
};

// Login Validator
const loginValidator = async (req, res, next) => {
    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(422).json({ errors: error.details.map(err => err.message) });
    }
    next();
};

// Update Profile Validator
const updateProfileValidator = async (req, res, next) => {
    const updateProfileSchema = Joi.object({
        firstName: Joi.string().optional(),
        lastName: Joi.string().optional(),
        email: Joi.string().email().optional(),
        phoneNumber: Joi.string().pattern(/^[0-9]+$/).min(10).optional()
    });

    const { error } = updateProfileSchema.validate(req.body);
    if (error) {
        return res.status(422).json({ errors: error.details.map(err => err.message) });
    }
    next();
};

module.exports = {
    registerValidator,
    loginValidator,
    updateProfileValidator
};
