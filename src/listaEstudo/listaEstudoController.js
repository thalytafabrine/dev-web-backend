const ListaEstudo = require('./listaEstudoModel');
const Card = require('../card/cardModel');

exports.getListasEstudo = (req, res) => {
    ListaEstudo.find((err, lista) => {
        if (err) {
            res.send(err);
        }
        res.status(200).json(lista);
    });
};

exports.criarLista = (req, res) => {
    const novaLista = new ListaEstudo(req.body);
    novaLista.save((err, lista) => {
        if (err) {
            res.send(err);
        }
        res.status(201).json(lista);
    });
};

exports.getListaEstudo = (req, res) => {
    ListaEstudo.findById(req.params.idLista, (err, lista) => {
        if (err) {
            res.send(err);
        }
        res.json(lista);
    });
};

exports.atualizarLista = (req, res) => {
    ListaEstudo.findOneAndUpdate({_id: req.params.idLista}, req.body, {new: true}, (err, lista) => {
        if (err) {
            res.send(err);
        }
        res.json(lista);
    });
};

exports.excluirLista = (req, res) => {
    ListaEstudo.remove({
        _id: req.params.idLista
    }, (err, lista) => {
        if (err) {
            res.send(err);
        }
        res.json({ mensagemSucesso: 'Lista de estudo removida com sucesso.'});
    });
};

exports.adicionarCard = (req, res) => {
    let card = new Card(req.body);
    
    card.save((err, card) => {
        if (err) {
            res.send(err);
        }
        
        ListaEstudo.findById(req.params.listaId, (err, lista) => {
            if (err) {
                res.send(err);
            }
            lista.cards.push(card._id);
            lista.save((err) => {
                if (err) {
                    res.send(err);
                }
                res.json(lista);
            });
        });
    });
}


exports.getCardsDaLista = (req, res) => {
    ListaEstudo.findById(req.params.idLista, (err, lista) => {
        if (err) {
            res.send(err);
        }
        res.json(lista.cards);
    });
};