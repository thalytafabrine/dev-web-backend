module.exports = (app) => {
    const usuarioCtrl = require('./usuarioController');
    const auth = require('../autenticacao/authController');
    const authenticate = auth.authenticate;
    const authorizeByUsername = auth.authorizeByUsername;

    app.route('/user')
        .get(authenticate, usuarioCtrl.listarUsuarios)
        .post(usuarioCtrl.cadastrarUsuario);
    app.route('/user/:username')
        .get(authenticate, usuarioCtrl.getUsuario)
        .put(authenticate, authorizeByUsername, usuarioCtrl.atualizarUsuario)
        .delete(authenticate, authorizeByUsername, usuarioCtrl.apagarUsuario);
};