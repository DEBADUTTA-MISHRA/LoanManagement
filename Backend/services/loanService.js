const Loan = require('../models/Loan');

const applyLoan = async (userId, loanData) => {
    // Check for existing active loan
    const activeLoan = await Loan.findOne({ userId: userId, loanStatus: 'active' });

    if (activeLoan) {
        return null; // Cannot apply if there is an active loan
    }

    // If no active loan, create a new loan
    const newLoan = new Loan({
        ...loanData,
        userId: userId,
        loanStatus: 'pending', // Default status is 'pending'
    });

    return await newLoan.save();
};

const getLoanById = async (loanId) => {
    return Loan.findById(loanId);
};

const getAllLoans = async () => {
    return Loan.find(); // Get all loans
};

const updateLoanStatus = async (loanId, status) => {
    return Loan.findByIdAndUpdate(loanId, { loanStatus: status }, { new: true });
};

module.exports = {
    applyLoan,
    getLoanById,
    getAllLoans,
    updateLoanStatus,
};
