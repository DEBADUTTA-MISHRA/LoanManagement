const userService = require('../services/userService');
const { generateToken } = require('../middlewares/authMiddleware');

const register = async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        if (!user) {
            return res.status(400).json({ error: 'User already exists' });
        }
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const user = await userService.loginUser(req.body);
        res.status(200).json({ message: 'User logged in successfully', data: user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUserDetails = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.userId);
        res.status(200).json({ data: user });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.userId, req.body);
        res.status(200).json({ message: 'User profile updated successfully', data: user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json({ data: users });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    login,
    register,
    getUserDetails,
    updateUserProfile,
    deleteUser,
    getAllUsers
};
