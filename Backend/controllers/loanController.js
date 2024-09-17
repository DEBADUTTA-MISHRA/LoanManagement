const loanService = require('../services/loanService');

const applyLoan = async (req, res) => {
    try {
        const loan = await loanService.applyLoan(req.user._id, req.body);

        if (!loan) {
            return res.status(400).json({ message: 'You have one active loan' });
        }

        res.status(201).json({ message: 'Loan application submitted successfully', data: loan });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while applying for the loan' });
    }
};

const getLoanDetails = async (req, res) => {
    try {
        const loan = await loanService.getLoanById(req.params.loanId);
        if (!loan) {
            return res.status(404).json({ error: 'Loan not found' });
        }
        res.status(200).json({ data: loan });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllLoans = async (req, res) => {
    try {
        const loans = await loanService.getAllLoans(req.query);
        res.status(200).json({ data: loans });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateLoanStatus = async (req, res) => {
    try {
        const loan = await loanService.updateLoanStatus(req.params.loanId, req.body.status);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.status(200).json({ message: 'Loan status updated successfully', data: loan });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    applyLoan,
    getLoanDetails,
    getAllLoans,
    updateLoanStatus
};
