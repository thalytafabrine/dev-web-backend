module.exports = (app) => {
    const usuarioCtrl = require('./usuarioController');

    app.route('/user')
        .get(usuarioCtrl.listarUsuarios)
        .post(usuarioCtrl.cadastrarUsuario);
    app.route('/user/:username')
        .get(usuarioCtrl.getUsuario);
    app.route('/user/:idUsuario')
        .put(usuarioCtrl.atualizarUsuario)
        .delete(usuarioCtrl.apagarUsuario);
};