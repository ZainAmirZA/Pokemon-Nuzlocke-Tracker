const express = require('express')
const router = express.Router()

const newPokemonsCtrl = require('../controllers/newPokemons')

router.post('/nuzlockes/:id/pokemons', newPokemonsCtrl.create)

module.exports = router