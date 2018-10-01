const Usuario = require('./usuarioModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.listarUsuarios = (req, res) => {
    Usuario.find((err, usuario) => {
        if (err) {
            res.send(err);
        }
        res.json(usuario);
    });
};

exports.cadastrarUsuario = (req, res) => {
    const key = req.body.username + req.body.password;
    bcrypt.hash(key, saltRounds).then((hash) => {
        req.body.password = hash;
        const novoUsuario = new Usuario(req.body);
        novoUsuario.save((err, usuario) => {
            if (err) {
                res.send(err);
            }
            res.json(usuario);
        });
    });
};

exports.getUsuario = (req, res) => {
    Usuario.findOne({
        username : req.params.username
    }, (err, usuario) => {
        if (err) {
            res.send(err);
        }
        res.json(usuario);
    });
};

exports.atualizarUsuario = (req, res) => {
    Usuario.findOneAndUpdate({
        _id: req.params.idUsuario
    }, req.body, {new: true}, (err, usuario) => {
        if (err) {
            res.send(err);
        }
        res.json(usuario);
    });
};

exports.apagarUsuario = (req, res) => {
    Usuario.remove({
        _id: req.params.idUsuario
    }, (err, usuario) => {
        if (err) {
            res.send(err);
        }
        res.json({ mensagemSucesso: 'Usuario removido com sucesso.'});
    });
};