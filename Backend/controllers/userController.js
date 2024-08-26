const userService = require('../services/userService');

const register = async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json({ message: 'User registered successfully', data: user });
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
        const user = await userService.updateUserProfile(req.params.userId, req.body);
        res.status(200).json({ message: 'User profile updated successfully', data: user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    login,
    register,
    getUserDetails,
    updateUserProfile
}
