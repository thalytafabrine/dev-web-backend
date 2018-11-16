const Card = require('./cardModel');

exports.getCards = (req, res) => {
    Card.find((err, card) => {
        if (err) {
            res.send(err);
        }
        res.status(200).json(card);
    });
};

exports.criarCard = (req, res) => {
    const novoCard = new Card(req.body);
    novoCard.save((err, card) => {
        if (err) {
            res.send(err);
        }
        res.status(201).json(card);
    });
};

exports.getCard = (req, res) => {
    Card.findById(req.params.idCard, (err, card) => {
        if (err) {
            res.send(err);
        }
        res.json(card);
    });
};

exports.atualizarCard = (req, res) => {
    Card.findOneAndUpdate({_id: req.params.idCard}, req.body, {new: true}, (err, card) => {
        if (err) {
            res.send(err);
        }
        res.json(card);
    });
};

exports.excluirCard = (req, res) => {
    Card.remove({
        _id: req.params.idCard
    }, (err, card) => {
        if (err) {
            res.send(err);
        }
        res.json({ mensagemSucesso: 'Card removido com sucesso.'});
    });
};