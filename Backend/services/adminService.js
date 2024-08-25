const Loan = require('../models/Loan');
const Repayment = require('../models/Repayment');
const User = require('../models/User');

exports.generateLoanReport = async () => {
    const totalLoans = await Loan.countDocuments();
    const approvedLoans = await Loan.countDocuments({ status: 'approved' });
    const pendingLoans = await Loan.countDocuments({ status: 'pending' });
    const rejectedLoans = await Loan.countDocuments({ status: 'rejected' });

    return {
        totalLoans,
        approvedLoans,
        pendingLoans,
        rejectedLoans,
    };
};

exports.generateRepaymentReport = async () => {
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

exports.generateCustomerReport = async () => {
    const totalCustomers = await User.countDocuments({ role: 'customer' });
    const activeLoans = await Loan.countDocuments({ status: 'approved' });

    return {
        totalCustomers,
        activeLoans,
    };
};
