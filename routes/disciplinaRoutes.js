'use strict';
module.exports = (app) => {
    const disciplina = require('../controllers/disciplinaController');

    // rotas da disciplina
    app.route('/disciplina')
        .get(disciplina.listarDisciplinas)
        .post(disciplina.criarDisciplina);

    app.route('/disciplina/:idDisciplina')
        .get(disciplina.getDisciplina)
        .put(disciplina.atualizarDisciplina)
        .delete(disciplina.apagarDisciplina);
};