const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudyListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cards: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Card'
            }
        ],
        default: []
    }
});

module.exports = mongoose.model('ListaEstudo', StudyListSchema);