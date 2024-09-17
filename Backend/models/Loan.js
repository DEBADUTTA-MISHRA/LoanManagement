const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Refers to the User model
        required: true,
    },
    loanAmount: {
        type: Number,
        required: true,
    },
    interestRate: {
        type: Number,
        required: true,
    },
    durationInMonths: {
        type: Number,
        required: true,
    },
    loanStatus: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'closed'],
        default: 'pending',
    },
    repaymentSchedule: [{
        dueDate: {
            type: Date,
            required: true,
        },
        amountDue: {
            type: Number,
            required: true,
        },
        amountPaid: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            enum: ['pending', 'paid', 'overdue'],
            default: 'pending',
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
