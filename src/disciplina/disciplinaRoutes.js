module.exports = (app) => {
    const disciplinaCtrl = require('./disciplinaController');

    app.route('/disciplina')
        .get(disciplinaCtrl.listarDisciplinas)
        .post(disciplinaCtrl.criarDisciplina);

    app.route('/disciplina/:idDisciplina')
        .get(disciplinaCtrl.getDisciplina)
        .put(disciplinaCtrl.atualizarDisciplina)
        .delete(disciplinaCtrl.apagarDisciplina);

    app.route('/disciplina/:idDisciplina/listaEstudo')
        .get(disciplinaCtrl.getListasDaDisciplina)
        .post(disciplinaCtrl.addListaEstudo);
};