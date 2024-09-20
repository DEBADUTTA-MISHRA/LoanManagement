const Repayment = require('../models/Repayment');
const Loan = require('../models/Loan');

const getRepaymentSchedule = async (loanId) => {
    const repaymentDetails =  Repayment.find({ loan: loanId });
    return repaymentDetails;
};

const makeRepayment = async (repaymentData) => {
    const { repaymentId, amount, paidDate } = repaymentData;

    const repayment = await Repayment.findById(repaymentId);
    if (!repayment) {
        throw new Error('Repayment not found');
    }

    if (repayment.status === 'paid') {
        throw new Error('Repayment already completed');
    }

    if (amount !== repayment.amount) {
        throw new Error('Incorrect repayment amount');
    }

    repayment.paidDate = paidDate;
    repayment.status = 'paid';
    await repayment.save();

    // Check if all repayments are completed for the loan
    const remainingRepayments = await Repayment.find({ loan: repayment.loan, status: { $ne: 'paid' } });
    if (remainingRepayments.length === 0) {
        const loan = await Loan.findById(repayment.loan);
        loan.status = 'closed';
        await loan.save();
    }

    return repayment;
};

const getRepaymentHistory = async (loanId) => {
    return Repayment.find({ loan: loanId, status: 'paid' });
};

module.exports = {
    getRepaymentSchedule,
    makeRepayment,
    getRepaymentHistory
};
