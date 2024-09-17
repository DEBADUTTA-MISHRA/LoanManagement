const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
const loanValidator = require('../validators/loanValidator');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected Routes for Customers
router.post('/apply', authMiddleware.protect, loanValidator.applyLoanValidator, loanController.applyLoan);
router.get('/:loanId', authMiddleware.protect, loanController.getLoanDetails);

// Protected Routes for Admins
router.get('/', authMiddleware.protect, authMiddleware.restrictTo('admin'), loanController.getAllLoans);
router.put('/:loanId/status', authMiddleware.protect, authMiddleware.restrictTo('admin'), loanValidator.updateLoanStatusValidator, loanController.updateLoanStatus);

module.exports = router;
