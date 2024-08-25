const loanService = require('../services/loanService');

exports.applyLoan = async (req, res) => {
    try {
        const loan = await loanService.applyLoan(req.user._id, req.body);
        res.status(201).json({ message: 'Loan application submitted', data: loan });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getLoanDetails = async (req, res) => {
    try {
        const loan = await loanService.getLoanById(req.params.loanId);
        res.status(200).json({ data: loan });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.getAllLoans = async (req, res) => {
    try {
        const loans = await loanService.getAllLoans(req.query);
        res.status(200).json({ data: loans });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateLoanStatus = async (req, res) => {
    try {
        const loan = await loanService.updateLoanStatus(req.params.loanId, req.body.status);
        res.status(200).json({ message: 'Loan status updated', data: loan });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
