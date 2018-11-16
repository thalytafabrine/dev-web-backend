'use strict';
module.exports = (app) => {
    const listaEstudoCtrl = require('./listaEstudoController');

    /**
     * Mapeamento das rotas das listas de estudo
     */
    app.route('/listaEstudo')
        .get(listaEstudoCtrl.getListasEstudo)
        .post(listaEstudoCtrl.criarLista);

    app.route('/listaEstudo/:idLista')
        .get(listaEstudoCtrl.getListaEstudo)
        .put(listaEstudoCtrl.atualizarLista)
        .delete(listaEstudoCtrl.excluirLista);
};