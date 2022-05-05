var express = require('express');
var router = express.Router();
let nuzlockesCtrl = require('../controllers/nuzlockes')

/* GET users listing. */


// router.get('/', nuzlockesCtrl.index)
router.delete('/:id', nuzlockesCtrl.delete)
router.get('/', nuzlockesCtrl.index)
router.get('/new', nuzlockesCtrl.new)
router.get('/:id/newPokemon', nuzlockesCtrl.newPokemon)
router.get('/:id', nuzlockesCtrl.show)
router.post('/', nuzlockesCtrl.create)

router.get('/:id/edit/:pid', nuzlockesCtrl.edit)
//req 1-send form
//send the user the form
//GET /nuzlockes/:id/edit

//req 2 - submitting the form
//PUT /nuzlockes/:id
router.put('/:id/edit/:pid', nuzlockesCtrl.update)

module.exports = router;
