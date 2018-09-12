const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisciplinaSchema = new Schema({
    nome: String,
    professor: String
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);