const express = require('express');
const router = express.Router();
const EquipmentController = require('../controllers/equipment.controller');

router.get('/api/equipments', EquipmentController.getEquipments);
router.get('/api/equipment/:id', EquipmentController.getEquipmentById);
router.post('/api/equipment', EquipmentController.createEquipment);

module.exports = router;
