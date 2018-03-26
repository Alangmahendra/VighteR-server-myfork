var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')
/* GET users listing. */
router.post('/:id/addHistory', usersController.addHistory)
module.exports = router;
