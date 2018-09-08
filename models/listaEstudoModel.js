const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListaEstudoSchema = new Schema({
    nome: String,
});

module.exports = mongoose.model('ListaEstudo', ListaEstudoSchema);