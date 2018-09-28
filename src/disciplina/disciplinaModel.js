const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisciplinaSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    professor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);