const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const disciplina = require('./routes/disciplinaRoutes')
const listaEstudo = require('./routes/listaEstudoRoutes')
app.use('/disciplina', disciplina)
app.use('/listaEstudo', listaEstudo)


// ROTAS QUE AINDA DEVEM SER CRIADAS CORRETAMENTE

// Rotas para as atividades de uma disciplina específica
app.get('/disciplina/:idDisciplina/listaEstudo/:idLista', (req, res) => res.send("Atividade x da disciplina escolhida."))
app.put('/disciplina/:idDisciplina/listaEstudo/:idLista', (req, res) => res.send("Submissão da atividade x."))

// Rota geral para visão inicial do sistema
app.get('/', (req, res) => res.send("Oi você!"))

// Rota para perfil
app.get('/:username', (req, res) => res.send("Esse é o seu perfil!"))

app.listen(port, () => console.log(`Example app RESTful API server started on port ${port}!`))

module.exports = app;