const express = require('express')
const app = express()

// criar constantes para as URIs
// funções que vão fazer as requisições


app.get('/disciplina', (req, res) => res.send('Listagem das disciplinas exibida ao aluno.'))

app.get('/disciplina/:id', (req, res) => res.send('Disciplina específica.'))

app.get('/disciplina/:id/atividade/:id', (req, res) => res.send("Atividade x da disciplina escolhida."))

app.put('/disciplina/:id/atividade/:id', (req, res) => res.send("Submissão da atividade x."))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
