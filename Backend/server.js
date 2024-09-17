const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const connectDB = require('./database/connection');

connectDB();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/loans', require('./routes/loanRoutes'));
app.use('/api/repayments', require('./routes/repaymentRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Server Error' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`Server running in http://localhost:${PORT}`)
);
