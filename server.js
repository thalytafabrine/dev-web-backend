const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Disciplina = require('./models/disciplinaModel'),
    bodyParser = require('body-parser');

// criar constantes para as URIs
// funções que vão fazer as requisições - disciplina done

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Disciplinabd', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./routes/disciplinaRoutes');
routes(app);

/**
 * Rotas para a atividade - falta criar
 * app.get('/disciplina/:id/atividade/:id', (req, res) => res.send("Atividade x da disciplina escolhida."))
 * app.put('/disciplina/:id/atividade/:id', (req, res) => res.send("Submissão da atividade x."))
 */

app.listen(port, () => console.log('Example app RESTful API server started on port ' + port + '!'))
