'use strict';
module.exports = (app) => {
    const listaEstudoCtrl = require('../controllers/listaEstudoController');

    /**
     * Mapeamento das rotas das disciplinas
     */
    app.route('/listaEstudo')
        .get(listaEstudoCtrl.getListasEstudo)
        .post(listaEstudoCtrl.criarLista);

    app.route('/listaEstudo/:idLista')
        .get(listaEstudoCtrl.getListaEstudo)
        .put(listaEstudoCtrl.atualizarLista)
        .delete(listaEstudoCtrl.excluirLista);
};