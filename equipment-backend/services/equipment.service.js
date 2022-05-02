const Equipment = require('../models/equipment.model');

const createEquipment = async (equipment) => {
    const newEquipment = new Equipment(equipment);
    const savedEquipment = await newEquipment.save();
    return savedEquipment;
}

const getEquipmentById = async (id) => {
    return {}
}

const getEquipmentByEquipmentNumber = async (equipmentNumber) => {
    const equipment = await Equipment.findOne({ equipmentNumber });
    return equipment;
}

const getEquipments = async (page, limit) => {
    const equipments = await Equipment.find({})
        .skip(page * limit).limit(limit);
    return equipments;
}

module.exports = {
    createEquipment,
    getEquipmentById,
    getEquipmentByEquipmentNumber,
    getEquipments
}