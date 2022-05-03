const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema ({
    nickname: {
        type: String,
        required: true
    },
    badgeMet: {
        type: Number,

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

const teamSchema = new Schema ({
    pokemon: {
        type: String, 
    },
    pokemons: [pokemonSchema]
})

const nuzlockeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    teams: [teamSchema]
})

module.exports = mongoose.model('Nuzlocke', nuzlockeSchema)