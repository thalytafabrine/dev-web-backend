exports.get = (req, res) => {
    const lista = {
        idLista: 1,
        nome: 'Lista 1º Estágio - Princípios de Desenvolvimento Web',
        professor: 'Gauds'
    };
    const response = req.params.idLista ? lista : 'Listas de estudo que você criou';
    res.status(200).send(response);
};

exports.criarLista = (req, res) => {
    res.status(201).send("Nova lista criada com sucesso!");
};

exports.atualizarLista = (req, res) => {
    res.send("Sua lista foi atualizada.");
};

exports.excluirLista = (req, res) => {
    res.send("Lista excluída com sucesso!");
};