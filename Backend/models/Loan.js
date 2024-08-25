const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: [true, 'Please provide loan amount'],
    },
    interestRate: {
        type: Number,
        required: [true, 'Please provide interest rate'],
    },
    tenure: {
        type: Number,
        required: [true, 'Please provide loan tenure in months'],
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'disbursed', 'closed'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Loan', LoanSchema);
