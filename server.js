const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Disciplina = require('./models/disciplinaModel'),
    bodyParser = require('body-parser');

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
 * 
 * Rota geral para visão inicial do sistema
 * app.get('/', (req, res) => res.send("Oi você!"))
 * 
 * Rota para perfil
 * app.get('/:username', (req, res) => res.send("Esse é o seu perfil!"))
 * 
 * Rotas para lista de estudo - sem disciplina
 * app.get('/listaEstudo', (req, res) => res.send("Listas de estudo que você criou"))
 * app.post('/listaEstudo', (req, res) => res.send("Nova lista criada com sucesso!"))
 * app.get('/listaEstudo/:idLista', (req, res) => res.send("Essa é sua lista de estudo."))
 * app.put('/listaEstudo/:idLista', (req, res) => res.send("Lista atualizada com sucesso."))
 * app.delete('/listaEstudo/:idLista', (req, res) => res.send("Lista excluída com sucesso."))
 */

app.listen(port, () => console.log('Example app RESTful API server started on port ' + port + '!'))
