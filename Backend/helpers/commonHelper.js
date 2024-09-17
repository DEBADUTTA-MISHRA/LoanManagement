const bcrypt = require('bcrypt');

    // Function to hash the password
const hashPassword = async (password) => {
    const saltRounds = 10; // You can adjust the salt rounds if needed
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};

const comparePassword = async (password, hashedPassword) => {
        return bcrypt.compare(password, hashedPassword);
    };


module.exports = {
    hashPassword,
    comparePassword
}

