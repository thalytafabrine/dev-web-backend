'use strict';
module.exports = (app) => {
    const disciplinaCtrl = require('./disciplinaController');

    /**
     * Mapeamento das rotas das disciplinas
     */
    app.route('/disciplina')
        .get(disciplinaCtrl.listarDisciplinas)
        .post(disciplinaCtrl.criarDisciplina);

    app.route('/disciplina/:idDisciplina')
        .get(disciplinaCtrl.getDisciplina)
        .put(disciplinaCtrl.atualizarDisciplina)
        .delete(disciplinaCtrl.apagarDisciplina);
};