const express = require('express');
const router = express.Router();
const repaymentController = require('../controllers/repaymentController');
const repaymentValidator = require('../validators/repaymentValidator');
const authMiddleware = require('../middleware/authMiddleware');

// Protected Routes
router.get('/:loanId', authMiddleware.protect, repaymentController.getRepaymentSchedule);
router.post('/pay', authMiddleware.protect, repaymentValidator.makeRepaymentValidator, repaymentController.makeRepayment);
router.get('/history/:loanId', authMiddleware.protect, repaymentController.getRepaymentHistory);

module.exports = router;
