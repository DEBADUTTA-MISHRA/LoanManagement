const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userValidator = require('../validators/userValidator');
const authMiddleware = require('../middleware/authMiddleware');

// Public Routes
router.post('/register', userValidator.registerValidator, userController.register);
router.post('/login', userValidator.loginValidator, userController.login);

// Protected Routes
router.get('/:userId', authMiddleware.protect, userController.getUserDetails);
router.put('/:userId', authMiddleware.protect, userValidator.updateProfileValidator, userController.updateUserProfile);

module.exports = router;
