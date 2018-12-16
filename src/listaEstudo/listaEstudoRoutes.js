'use strict';
module.exports = (app) => {
    const listaEstudoCtrl = require('./listaEstudoController');

    app.route('/listaEstudo')
        .get(listaEstudoCtrl.getListasEstudo)
        .post(listaEstudoCtrl.criarLista);

    app.route('/listaEstudo/:idLista')
        .get(listaEstudoCtrl.getListaEstudo)
        .put(listaEstudoCtrl.atualizarLista)
        .delete(listaEstudoCtrl.excluirLista);
    
    app.route('/listaEstudo/:idLista/card')
        .get(listaEstudoCtrl.getCardsDaLista)
        .post(listaEstudoCtrl.adicionarCard);
};