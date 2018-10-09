const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: { 
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['STUDENT', 'TEACHER'],
        default: ['STUDENT']
    },
    subjects: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Disciplina'
            }
        ],
        default: []
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

UserSchema.methods.verifyPassword = (password) => {
    return (UserSchema.password === password);
};

module.exports = mongoose.model('Usuario', UserSchema);