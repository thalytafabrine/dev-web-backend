const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    session = require('express-session'),
    LocalStrategy = require('passport-local').Strategy,
    cache = require('memory-cache'),
    morgan = require('morgan'),
    path = require('path'),
    fs = require('fs'),
    app = express(),
    port = process.env.PORT || 3000,
    disciplina = require('./src/disciplina/disciplinaRoutes'),
    listaEstudo = require('./src/listaEstudo/listaEstudoRoutes'),
    login = require('./src/autenticacao/loginRoutes'),
    usuario = require('./src/usuario/usuarioRoutes'),
    User = require('./src/usuario/usuarioModel'),
    swagger = require('./docs/docRoutes');

// create a write stream (in append mode)
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Disciplinabd', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(cors());

/** Session
 *  Provavelmente usarei o Firebase portanto é isto.
 */
// app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000}, resave: false, saveUninitialized: false}));
// app.use(passport.initialize());
// app.use(passport.session());

// User.verifyPassword = (password) => {
//     User.password === password ? true : false;
// };

// passport.use(new LocalStrategy(
//     (username, password) => {
//         User.findOne({username: username}, (err, user) => {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 return done(null, false);
//             }
//             if (!user.verifyPassword(password)) {
//                 return done(null, false);
//             }
//             return done(null, user);
//         });
//     }
// ));

disciplina(app);
listaEstudo(app);
usuario(app);
// login(app, passport);
swagger(app);

/**
 * Rotas para a atividade - falta criar adequadamente
 */
app.get('/disciplina/:idDisciplina/listaEstudo/:idLista', (req, res) => res.send("Atividade x da disciplina escolhida."))
app.put('/disciplina/:idDisciplina/listaEstudo/:idLista', (req, res) => res.send("Submissão da atividade x."))

// Rota geral para visão inicial do sistema
app.get('/', (req, res) => res.send("Oi você!"))

//Rota para perfil
app.get('/user/:username', (req, res) => res.send("Esse é o seu perfil!"))

app.listen(port, () => console.log(`Example app RESTful API server started on port ${port}!`))

module.exports = app;