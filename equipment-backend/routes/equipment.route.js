const express = require('express');
const router = express.Router();
const EquipmentController = require('../controllers/equipment.controller');

router.get('/equipments', EquipmentController.getEquipments);
router.get('/equipment/:id', EquipmentController.getEquipmentById);
router.post('/equipment', EquipmentController.createEquipment);

module.exports = router;
