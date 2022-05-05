const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema ({
    pokemon: {
        type: String, 
        required: true,
    },
    nickname: {
        type: String,
        required: true
    },
    badgeMet: {
        type: Number,
        min: 0,
        max: 8,

    },
    alive: {
        type: Boolean,
        required: true
    },
    inParty: {
        type: Boolean,
        required: true,
    },
    story: {
        type: String,
    }
})


const nuzlockeSchema = new Schema({
    title: {
        type: String,
        
    },
    pokemons: [pokemonSchema]
})

module.exports = mongoose.model('Nuzlocke', nuzlockeSchema)