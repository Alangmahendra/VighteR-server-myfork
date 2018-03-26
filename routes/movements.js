var express = require('express');
var router = express.Router();
const movementController = require('../controllers/movementsController')
/* GET home page. */
router.post('/', movementController.addMovement)
router.get('/', movementController.getMovements)
router.post('/:id/addMove', movementController.addMove)
router.delete('/:id/deleteMovement', movementController.deleteMovement)


module.exports = router;
