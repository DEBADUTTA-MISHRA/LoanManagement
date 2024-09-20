const Loan = require('../models/Loan');
const Repayment = require('../models/Repayment');

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
    const loan = await Loan.findById(loanId);
    if (!loan) {
        return null;
    }
    
    // If the status is being updated to "approved", generate the repayment schedule
    if (status === 'approved' && loan.loanStatus !== 'approved') {
       const repaymentSchedule = generateRepaymentSchedule(loan.loanAmount, loan.durationInMonths, loan._id);

        console.log("RepaymentSchedule",repaymentSchedule);
        // Save repayment schedule to the Repayment model
        await Repayment.insertMany(repaymentSchedule);
    }

    loan.loanStatus = status;
    return await loan.save();
};

// Generate repayment schedule based on loan amount, interest rate, and duration
const generateRepaymentSchedule = (loanAmount, durationInMonths, loanId) => {
    const schedule = [];
    const monthlyPayment = loanAmount / durationInMonths; // Simple fixed payment logic

    for (let i = 1; i <= durationInMonths; i++) {
        schedule.push({
            loan: loanId,
            dueDate: new Date(new Date().setMonth(new Date().getMonth() + i)),
            amount: monthlyPayment,
            amountPaid: 0,
            status: 'pending',
        });
    }
    return schedule;
};


module.exports = {
    applyLoan,
    getLoanById,
    getAllLoans,
    updateLoanStatus,
};
