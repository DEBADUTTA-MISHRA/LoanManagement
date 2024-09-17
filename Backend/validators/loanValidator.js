const { check, validationResult } = require('express-validator');

// Loan Application Validator
const applyLoanValidator = [
    check('loanAmount').isNumeric().withMessage('Loan amount must be a number'),
    check('interestRate').isNumeric().withMessage('Interest rate must be a number'),
    check('durationInMonths').isNumeric().withMessage('Duration must be a number'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
];

// Loan Status Update Validator (for Admins)
const updateLoanStatusValidator = [
    check('status').isIn(['pending', 'approved', 'rejected', 'closed']).withMessage('Invalid loan status'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    applyLoanValidator,
    updateLoanStatusValidator
};
