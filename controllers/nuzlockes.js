const Nuzlocke = require('../models/nuzlocke')
// const { response } = require('../server')

module.exports = {
    show,
    new: newNuzlocke,
    create,
}

function show(req, res) {
    res.render('index')
}

function newNuzlocke(req, res) {
    res.render('nuzlockes/new', {title: 'Add Nuzlocke'})
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