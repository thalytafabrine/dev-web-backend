const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    cache = require('memory-cache'),
    morgan = require('morgan'),
    path = require('path'),
    fs = require('fs'),
    app = express(),
    port = process.env.PORT || 8089;

const disciplina = require('./src/disciplina/disciplinaRoutes'),
    listaEstudo = require('./src/listaEstudo/listaEstudoRoutes'),
    swagger = require('./docs/docRoutes'),
    card = require('./src/card/cardRoutes');
    
// create a write stream (in append mode)
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Disciplinabd', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(cors());

disciplina(app);
listaEstudo(app);
swagger(app);
card(app);

// Rota geral para visão inicial do sistema
app.get('/', (req, res) => res.send("Oi você!"))

app.listen(port, () => console.log(`Example app RESTful API server started on port ${port}!`))

module.exports = app;