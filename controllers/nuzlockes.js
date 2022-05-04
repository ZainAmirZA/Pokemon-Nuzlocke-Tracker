const Nuzlocke = require('../models/nuzlocke')
// const { response } = require('../server')

module.exports = {
    index,
    show,
    new: newNuzlocke,
    create,
    newPokemon,
    delete: deleteNuzlocke,
}

function index(req, res) {
    Nuzlocke.find({}, function(err, nuzlockes) {
        res.render('index', {nuzlockes})
    })
}

function show(req, res) {
    Nuzlocke.findById(req.params.id, function(err, nuzlocke) {
        if (err) return console.log(err);
        console.log(nuzlocke)
        res.render('nuzlockes/show', {nuzlocke})
    })
    // res.render('index')
}

function newNuzlocke(req, res) {
    res.render('nuzlockes/new', {title: 'Add Nuzlocke'})
}

function newPokemon(req, res) {
    res.render('nuzlockes/newPokemon', {title: 'Add Pokemon'})
}

function create(req, res) {
    console.log(req.body)
    const nuzlocke = new Nuzlocke(req.body);
    nuzlocke.save(function(err) {
        console.log(err)
        if (err) return res.redirect('/nuzlockes/new');
        console.log(nuzlocke)
        res.redirect('/')
    })
} 

function deleteNuzlocke(req, res) {
    console.log(req.params)
    Nuzlocke.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('index')

    })
    // Nuzlocke.deleteOne({_id : req.params.id})
}