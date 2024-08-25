const { check, validationResult } = require('express-validator');

module.exports = {
    validateUserCreation: [
        check('email').isEmail().withMessage('Email is invalid'),
        check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        check('name').isString().withMessage('Name is required'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            next();
        }
    ],

    validateUserLogin: [
        check('email').isEmail().withMessage('Email is invalid'),
        check('password').not().isEmpty().withMessage('Password is required'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            next();
        }
    ],
};
