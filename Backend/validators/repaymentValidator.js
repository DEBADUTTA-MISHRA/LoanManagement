const Joi = require('joi');

const makeRepaymentValidator = (req, res, next) => {
    const schema = Joi.object({
        repaymentId: Joi.string().required().messages({
            'string.empty': 'Repayment ID is required',
        }),
        amount: Joi.number().positive().required().messages({
            'number.positive': 'Amount must be a positive number',
            'number.base': 'Amount must be a number',
            'number.empty': 'Amount is required',
        }),
        paidDate: Joi.date().required().messages({
            'date.base': 'Paid date must be a valid date',
            'date.empty': 'Paid date is required',
        }),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};

module.exports = {
    makeRepaymentValidator
};
