const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    studyLists: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ListaEstudo'
            }
        ],
        default: []
    }
});

module.exports = mongoose.model('Disciplina', SubjectSchema);