const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/teas.controller')

router.get('/', ctrl.fetchTeas);
// router.get('/:id', ctrl.findTea);
// router.post('/', ctrl.createTea);
// router.put('/:id', ctrl.editTea);
// router.delete('/:id', ctrl.deleteTea);

module.exports = router;