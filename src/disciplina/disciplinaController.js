const Disciplina = require('./disciplinaModel');
const ListaEstudo = require('../listaEstudo/listaEstudoModel');

exports.listarDisciplinas = (req, res) => {
    Disciplina.find((err, disciplina) => {
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

exports.addListaEstudo = (req, res) => {
    let listaEstudo = new ListaEstudo(req.body);
    listaEstudo.save((err, listaEstudo) => {
        if (err) {
            res.send(err);
        }
        
        Disciplina.findById(req.params.idDisciplina, (err, disciplina) => {
            if (err) {
                res.send(err);
            }

            disciplina.studyLists.push(listaEstudo._id);
            disciplina.save((err) => {
                if (err) {
                    res.send(err);
                }
                res.json(disciplina);
            });
        });
    });
};

exports.getListasDaDisciplina = (req, res) => {
    Disciplina.findById(req.params.idDisciplina, (err, disciplina) => {
        if (err) {
            res.send(err);
        }
        res.json(disciplina.studyLists);
    });
};