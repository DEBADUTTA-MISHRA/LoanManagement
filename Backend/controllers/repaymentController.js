const repaymentService = require('../services/repaymentService');

const getRepaymentSchedule = async (req, res) => {
    try {
        const repayments = await repaymentService.getRepaymentSchedule(req.params.loanId);
        res.status(200).json({ data: repayments });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const makeRepayment = async (req, res) => {
    try {
        const repayment = await repaymentService.makeRepayment(req.body);
        res.status(200).json({ message: 'Repayment successful', data: repayment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRepaymentHistory = async (req, res) => {
    try {
        const repayments = await repaymentService.getRepaymentHistory(req.params.loanId);
        res.status(200).json({ data: repayments });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getRepaymentSchedule,
    makeRepayment,
    getRepaymentHistory
};
