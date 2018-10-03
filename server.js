const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    cache = require('memory-cache'),
    auth = require('./src/autenticacao/authRoutes');
    morgan = require('morgan'),
    path = require('path'),
    fs = require('fs'),
    app = express(),
    port = process.env.PORT || 3000;

const disciplina = require('./src/disciplina/disciplinaRoutes'),
    listaEstudo = require('./src/listaEstudo/listaEstudoRoutes'),
    usuario = require('./src/usuario/usuarioRoutes'),
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

/** Session */
// app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000}, resave: false, saveUninitialized: false}));
// app.use(passport.initialize());
// app.use(passport.session());

disciplina(app);
listaEstudo(app);
usuario(app);
swagger(app);
auth(app);

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