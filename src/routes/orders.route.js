const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/orders.controller')

router.get('/', ctrl.fetchOrders);
router.post('/', ctrl.createOrder);

module.exports = router;