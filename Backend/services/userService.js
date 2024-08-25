const User = require('../models/userModel');

module.exports = {
    createUser: async (userData) => {
        const newUser = new User(userData);
        return newUser.save();
    },

    getUserByEmail: async (email) => {
        return User.findOne({ email });
    },

    getUserById: async (userId) => {
        return User.findById(userId);
    },

    updateUser: async (userId, updateData) => {
        return User.findByIdAndUpdate(userId, updateData, { new: true });
    },
};
