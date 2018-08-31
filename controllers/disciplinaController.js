// Get de uma disciplina específica ou todas as disciplinas, se não houver id.
exports.get = (req, res) => {
    const disciplina = {
        id: 1,
        nome: 'Princípios de Desenvolvimento Web',
        professor: 'Gauds'
    }
    const response = req.params.id ? disciplina : 'Listagem das disciplinas exibida ao aluno.'
    res.status(201).send(response);
};
