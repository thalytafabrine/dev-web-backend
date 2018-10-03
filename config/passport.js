const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../src/usuario/usuarioModel');

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
    },
    function (jwtPayload, cb) {
        return User.findOneById(jwtPayload.id)
            .then(user => cb(null, user))
            .catch(err => cb(err));
    }
));
