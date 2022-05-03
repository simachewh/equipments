const equipmentService = require('../services/equipment.service');

const createEquipment = async (req, res) => {
    try {
        const {
            equipmentNumber,
            address,
            contractStartDate,
            contractEndDate,
            isRunning
        } = req.body;
        const equipment = {
            equipmentNumber,
            address,
            contractStartDate,
            contractEndDate,
            isRunning
        }
        let existingEquipment = await equipmentService.getEquipmentByEquipmentNumber(equipmentNumber);
        if (existingEquipment) {
            return res.status(409).json({
                message: 'Equipment already exists'
            });
        }
        const newEquipment = await equipmentService.createEquipment(req.body);
        res.json(equipment);
    } catch (err) {
        console.error(`ERROR ${err.message}`);
        res.status(500).json({ message: 'ERROR: internal server error occured' });
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
        const page = req.query.page || 0;
        const equipment = await equipmentService.getEquipments(page, limit);
        res.json(equipment);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createEquipment,
    getEquipmentById,
    getEquipments
}