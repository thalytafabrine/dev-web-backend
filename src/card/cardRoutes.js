'use strict';
module.exports = (app) => {
    const cardCtrl = require('./cardController');

    /**
     * Mapeamento das rotas dos cards
     */
    app.route('/card')
        .get(cardCtrl.getCards)
        .post(cardCtrl.criarCard);

    app.route('/card/:idCard')
        .get(cardCtrl.getCard)
        .put(cardCtrl.atualizarCard)
        .delete(cardCtrl.excluirCard);
};