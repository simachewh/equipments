const equipmentService = require('../services/equipment.service');

const createEquipment = async (req, res) => {
    try {
        const equipment = await equipmentService.createEquipment(req.body);
        res.json(equipment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getEquipmentById = async (req, res) => {
    try {
        const equipment = await equipmentService.getEquipmentById(req.params.id);
        res.json(equipment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getEquipments = async (req, res) => {
    try {
        const limit = req.query.limit || 10;
        const equipment = await equipmentService.getEquipments(limit);
        res.json(equipment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createEquipment,
    getEquipmentById,
    getEquipments
}