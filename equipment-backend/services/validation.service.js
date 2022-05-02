const { check, validationResult } = require('express-validator');

equipmentValidation = [
    check('equipmentNumber').isLength({ min: 4 }).withMessage('Equipment number is required'),
    check('address').isLength({ min: 4 }).withMessage('Address is required'),
    check('contractStartDate').isLength({ min: 4 }).withMessage('Contract start date is required'),
    check('contractEndDate').isLength({ min: 4 }).withMessage('Contract end date is required'),
    check('status').isLength({ min: 4 }).withMessage('Status is required'), (req, res, next) => {
        const errors = validationResult(req);
        console.log(`validation errors: ${errors.array()}`);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = equipmentValidation;