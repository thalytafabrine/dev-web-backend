const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudyListSchema = new Schema({
    name: String,
    terms: [String],
    definitions: [String]
});

module.exports = mongoose.model('ListaEstudo', StudyListSchema);