const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    equipmentNumber: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    contractStartDate: {
        type: Date,
        required: true
    },
    contractEndDate: {
        type: Date,
        required: true
    },
    isRunning: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Equipment', equipmentSchema);
