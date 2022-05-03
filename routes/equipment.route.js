const express = require('express');
const router = express.Router();
const EquipmentController = require('../controllers/equipment.controller');
const validationService = require('../services/validation.service');

router.get('/api/equipments', EquipmentController.getEquipments);
router.get('/api/equipment/:id', EquipmentController.getEquipmentById);
router.post('/api/equipments', validationService, EquipmentController.createEquipment);

module.exports = router;
