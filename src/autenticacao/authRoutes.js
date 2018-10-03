const jwt = require('jsonwebtoken');
const User = require('../usuario/usuarioModel');
const secret = require('../../config/jwtSecret');

module.exports = (app) => {

    app.route('/auth')
        .post(function (req, res) {
            User.findOne({
                username: req.body.username
              }, function(err, user) {
                if (err) throw err;
                if (!user) {
                  res.json({ success: false, message: 'Authentication failed. User not found.' });
                } else if (user) {
                  // check if password matches - tem que usar o bcrypt pra comparar aqui
                  if (user.password != req.body.password) {
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                  } else {
                    // create a token with only our given payload
                    // we don't want to pass in the entire user since that has the password
                    const payload = { username: user.username };
                    var token = jwt.sign(payload, secret.secret, {
                      expiresIn: 3600 
                    });
                    res.json({
                      success: true,
                      message: 'Enjoy your token!',
                      token: token
                    });
                  }   
                }
            });
        });
};