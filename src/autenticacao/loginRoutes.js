module.exports = (app, passport) => {

    app.route('/login')
        .post((req, res, next) => {
            passport.authenticate('local', (err, user, info) => {
                req.login(user, (err) => {
                    return res.send('You were authenticated & logged in!');
                });
            })(req, res, next);
        });
};