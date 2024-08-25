module.exports = {
    successResponse: (res, message, data = {}) => {
        return res.status(200).json({
            success: true,
            message,
            data,
        });
    },

    errorResponse: (res, message, errorCode = 500) => {
        return res.status(errorCode).json({
            success: false,
            message,
        });
    },

    validationErrorResponse: (res, errors) => {
        return res.status(422).json({
            success: false,
            message: 'Validation errors',
            errors,
        });
    },
};
