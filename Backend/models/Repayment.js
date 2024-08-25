const mongoose = require('mongoose');

const RepaymentSchema = new mongoose.Schema({
    loan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loan',
        required: true,
    },
    amount: {
        type: Number,
        required: [true, 'Please provide repayment amount'],
    },
    dueDate: {
        type: Date,
        required: [true, 'Please provide due date'],
    },
    paidDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['pending', 'paid', 'overdue'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Repayment', RepaymentSchema);
