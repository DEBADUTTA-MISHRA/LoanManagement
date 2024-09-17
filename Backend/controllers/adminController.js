const adminService = require('../services/adminService');

const getLoanReport = async (req, res) => {
    try {
        const report = await adminService.generateLoanReport();
        res.status(200).json({ data: report });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRepaymentReport = async (req, res) => {
    try {
        const report = await adminService.generateRepaymentReport();
        res.status(200).json({ data: report });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCustomerReport = async (req, res) => {
    try {
        const report = await adminService.generateCustomerReport();
        res.status(200).json({ data: report });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports ={
    getLoanReport,
    getRepaymentReport,
    getCustomerReport
}
