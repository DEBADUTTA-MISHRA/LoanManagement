const Joi = require('joi');

exports.makeRepaymentValidator = (req, res, next) => {
    const schema = Joi.object({
        amount: Joi.number().positive().required(),
        repaymentId: Joi.string().required(),
        paidDate: Joi.date().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};
