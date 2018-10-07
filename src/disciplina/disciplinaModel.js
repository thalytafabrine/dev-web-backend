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
    studyLists: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Disciplina', SubjectSchema);