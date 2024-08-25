const { check, validationResult } = require('express-validator');

module.exports = {
    validateLoanCreation: [
        check('amount').isNumeric().withMessage('Amount must be a number'),
        check('userId').isMongoId().withMessage('Invalid User ID'),
        check('loanType').isString().withMessage('Loan type is required'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            next();
        }
    ],

    validateLoanUpdate: [
        check('status').isString().withMessage('Status must be a string'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            next();
        }
    ],
};
