const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Function to generate JWT token
const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        // You can include additional fields here if needed
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
};

// Middleware to protect routes
const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        console.log("Received token:", token);  // Log the token here
    }
    
    if (!token) {
        console.log("Token missing");
        return res.status(401).json({ error: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        console.log("Token validation failed", error.message); // Log the error
        return res.status(401).json({ error: 'Not authorized, token failed' });
    }
};

// Middleware to restrict access to specific roles
const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            next();
        } else {
            res.status(403).json({ error: 'Not authorized' });
        }
    };
};

module.exports = {
    generateToken,
    protect,
    restrictTo,  // Export the restrictTo function
};
