const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected Routes for Admins
router.get('/reports/loans', authMiddleware.protect, authMiddleware.restrictTo('admin'), adminController.getLoanReport);
router.get('/reports/repayments', authMiddleware.protect, authMiddleware.restrictTo('admin'), adminController.getRepaymentReport);
router.get('/reports/customers', authMiddleware.protect, authMiddleware.restrictTo('admin'), adminController.getCustomerReport);

module.exports = router;
