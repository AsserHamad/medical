var express = require('express');
const { previousChoice, setNewChoice } = require('../controllers/medical');
const { decryptIbsNo } = require('../middleware/ibsNo');
var router = express.Router();

/* GET home page. */
router.get('/', decryptIbsNo, previousChoice);
router.post('/', decryptIbsNo, setNewChoice);

module.exports = router;
