const Loan = require('../models/Loan');
const Repayment = require('../models/Repayment');
const User = require('../models/User');

const generateLoanReport = async () => {
    const totalLoans = await Loan.countDocuments();
    const approvedLoans = await Loan.countDocuments({ loanStatus: 'approved' });
    const pendingLoans = await Loan.countDocuments({ loanStatus: 'pending' });
    const rejectedLoans = await Loan.countDocuments({ loanStatus: 'rejected' });

    return {
        totalLoans,
        approvedLoans,
        pendingLoans,
        rejectedLoans,
    };
};

const generateRepaymentReport = async () => {
    const totalRepayments = await Repayment.countDocuments();
    const paidRepayments = await Repayment.countDocuments({ status: 'paid' });
    const pendingRepayments = await Repayment.countDocuments({ status: 'pending' });
    const overdueRepayments = await Repayment.countDocuments({ status: 'overdue' });

    return {
        totalRepayments,
        paidRepayments,
        pendingRepayments,
        overdueRepayments,
    };
};

const generateCustomerReport = async () => {
    const totalCustomers = await User.countDocuments({ role: 'borrower' });
    const activeLoans = await Loan.countDocuments({ loanStatus: 'approved' });

    return {
        totalCustomers,
        activeLoans,
    };
};


module.exports = {
    generateLoanReport,
    generateRepaymentReport,
    generateCustomerReport
}