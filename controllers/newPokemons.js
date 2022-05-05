const Nuzlocke = require('../models/nuzlocke')
const nuzlockes = require('./nuzlockes')

module.exports = {
    create,
}

function create(req, res) {
    Nuzlocke.findById(req.params.id, function(err, nuzlocke) {
        console.log('This is nuzlocke', nuzlocke)
        console.log('This is req.body', req.body)
        nuzlocke.pokemons.push(req.body)
        nuzlocke.save(function(err, savedNuzlocke) {
            console.log('This is the result of push', nuzlocke)
            console.log(savedNuzlocke)
            res.redirect('/nuzlockes/' + req.params.id)
        })
    })
}