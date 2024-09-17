const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userValidator = require('../validators/userValidator');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', userValidator.registerValidator, userController.register);
router.post('/login', userValidator.loginValidator, userController.login);

// Protected Routes
router.get('/:userId', authMiddleware.protect, userController.getUserDetails);
router.put('/:userId', authMiddleware.protect, userValidator.updateProfileValidator, userController.updateUserProfile);

// Admin Routes (e.g., for viewing or deleting users)
router.delete('/:userId', authMiddleware.protect, authMiddleware.restrictTo('admin'), userController.deleteUser);
router.get('/admin/all', authMiddleware.protect, authMiddleware.restrictTo('admin'), userController.getAllUsers);

module.exports = router;
