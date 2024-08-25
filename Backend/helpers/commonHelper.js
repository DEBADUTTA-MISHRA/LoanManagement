const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    hashPassword: async (password) => {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    },

    comparePassword: async (password, hashedPassword) => {
        return bcrypt.compare(password, hashedPassword);
    },

    generateJWT: (user) => {
        return jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
    },

    verifyJWT: (token) => {
        return jwt.verify(token, process.env.JWT_SECRET);
    },
};
