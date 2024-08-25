const Loan = require('../models/loanModel');

module.exports = {
    createLoan: async (loanData) => {
        const newLoan = new Loan(loanData);
        return newLoan.save();
    },

    getLoanById: async (loanId) => {
        return Loan.findById(loanId);
    },

    updateLoanStatus: async (loanId, status) => {
        return Loan.findByIdAndUpdate(loanId, { status }, { new: true });
    },

    getLoansByUserId: async (userId) => {
        return Loan.find({ userId });
    },
};
