const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// criar constantes para as URIs
// funções que vão fazer as requisições


app.get('/disciplina', (req, res) => res.send('Listagem das disciplinas exibida ao aluno.'))

app.get('/disciplina/:id', (req, res) => res.send('Disciplina específica.'))

app.get('/disciplina/:id/atividade/:id', (req, res) => res.send("Atividade x da disciplina escolhida."))

app.put('/disciplina/:id/atividade/:id', (req, res) => res.send("Submissão da atividade x."))

app.listen(port, () => console.log('Example app RESTful API server started on port ' + port + '!'))
