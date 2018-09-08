const Disciplina = require('../models/disciplinaModel');

exports.listarDisciplinas = (req, res) => {
    Disciplina.find({}, (err, disciplina) => {
        if (err) {
            res.send(err);
        }
        res.json(disciplina);
    });
};

exports.criarDisciplina = (req, res) => {
    const novaDisciplina = new Disciplina(req.body);
    novaDisciplina.save((err, disciplina) => {
        if (err) {
            res.send(err);
        }
        res.json(disciplina);
    });
};

exports.getDisciplina = (req, res) => {
    Disciplina.findById(req.params.idDisciplina, (err, disciplina) => {
        if (err) {
            res.send(err);
        }
        res.json(disciplina);
    });
};

exports.atualizarDisciplina = (req, res) => {
    Disciplina.findOneAndUpdate({_id: req.params.idDisciplina}, req.body, {new: true}, (err, disciplina) => {
        if (err) {
            res.send(err);
        }
        res.json(disciplina);
    });
};

exports.apagarDisciplina = (req, res) => {
    Disciplina.remove({
        _id: req.params.idDisciplina
    }, (err, disciplina) => {
        if (err) {
            res.send(err);
        }
        res.json({ mensagemSucesso: 'Disciplina removida com sucesso.'});
    });
};