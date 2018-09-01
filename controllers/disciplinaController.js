exports.get = (req, res) => {
    const disciplina = {
        idDisciplina: 1,
        nome: 'Princípios de Desenvolvimento Web',
        professor: 'Gauds'
    };
    const response = req.params.idDisciplina ? disciplina : 'Listagem das disciplinas exibida ao aluno.';
    res.status(200).send(response);
};

exports.criarDisciplina = (req, res) => {
    res.status(201).send("Disciplina criada com sucesso!");
};

exports.atualizarDisciplina = (req, res) => {
    res.send("Disciplina atualizada.");
};

exports.excluirDisciplina = (req, res) => {
    res.send("Disciplina excluída com sucesso!");
};