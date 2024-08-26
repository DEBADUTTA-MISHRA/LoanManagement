const { check, validationResult } = require('express-validator');


    const registerValidator = async ()=>{ 
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
}

    const loginValidator= async ()=>{
        check('email').isEmail().withMessage('Email is invalid'),
        check('password').not().isEmpty().withMessage('Password is required'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            next();
        }

        const updateProfileValidator = async ()=>{
            
            next();
        }
}

    module.exports = {
        registerValidator,
        loginValidator,
        updateProfileValidator
    };
