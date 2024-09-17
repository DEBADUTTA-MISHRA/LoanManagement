const User = require('../models/User');
const { hashPassword, comparePassword } = require('../helpers/commonHelper');
const { generateToken } = require('../middlewares/authMiddleware');

// Register User
const registerUser = async (userData) => {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
        return null;
    }

    userData.password = await hashPassword(userData.password);
    const newUser = new User(userData);
    return newUser.save();
};

// Login User
const loginUser = async (loginData) => {
    const { email, password } = loginData;

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid password');
    }

    const token = generateToken(user);
    return { user, token };
};

// Get User By ID
const getUserById = async (userId) => {
    return User.findById(userId);
};

// Update User Profile
const updateUser = async (userId, updateData) => {
    return User.findByIdAndUpdate(userId, updateData, { new: true });
};

// Delete User
const deleteUser = async (userId) => {
    return User.findByIdAndDelete(userId);
};

// Get All Users (Admin)
const getAllUsers = async () => {
    return User.find();
};

module.exports = {
    registerUser,
    loginUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers
};
