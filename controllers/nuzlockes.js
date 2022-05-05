const Nuzlocke = require('../models/nuzlocke')
// const { response } = require('../server')

module.exports = {
    index,
    show,
    new: newNuzlocke,
    create,
    newPokemon,
    delete: deleteNuzlocke,
    edit,
    update,
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
    Nuzlocke.findById(req.params.id, function(err, nuzlocke) {
        console.log('this is req params id', req.params.id)
        if (err) return console.log(err); 
        res.render('nuzlockes/newPokemon', { nuzlocke })
    })
}

function edit(req, res) {
    Nuzlocke.findById(req.params.id, function(err, nuzlocke) {
        pid = req.params.pid
        console.log('this is req params id', req.params.id)
        if (err) return console.log(err); 
        res.render('nuzlockes/edit', { nuzlocke, pid })
    })
}

function update(req, res) {
    Nuzlocke.findById(req.params.id, function(err, nuzlocke) {
        console.log(nuzlocke.pokemons)
        idx = nuzlocke.pokemons.findIndex(pokemon => pokemon.id === req.params.pid)
        console.log('This is idx', idx)
        nuzlocke.pokemons[idx] = req.body
        // console.log('This is now p', p)
        // nuzlocke.pokemons.push(p)
        nuzlocke.save(function(err, pok) {
            if (err) return console.log(err)
            console.log('This is pok', pok)
            res.redirect('/nuzlockes/' + req.params.id)
        })
        // console.log('this is update find nuzlocke', nuzlocke) 
    
    // Nuzlocke.updateOne(req.params.id, req.body)
    // console.log('This is update req params', req.params.id)
    
})}

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
        res.redirect('/')

    })
    // Nuzlocke.deleteOne({_id : req.params.id})
}