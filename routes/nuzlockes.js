var express = require('express');
var router = express.Router();
let nuzlockesCtrl = require('../controllers/nuzlockes')

/* GET users listing. */


// router.get('/', nuzlockesCtrl.index)
router.get('/new', nuzlockesCtrl.new)
router.post('/', nuzlockesCtrl.create)

module.exports = router;
