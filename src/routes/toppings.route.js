const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/toppings.controller')

router.get('/', ctrl.fetchToppings);
// router.get('/:id', ctrl.findTopping);
// router.post('/', ctrl.createTopping);
// router.put('/:id', ctrl.editTopping);
// router.delete('/:id', ctrl.deleteTopping);

module.exports = router;