const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisciplinaSchema = new Schema({
    nome: {
        type: String
    },
    professor: {
        type: String
    }
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);