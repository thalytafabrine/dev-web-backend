const app = require('../server.js'),
    request = require('supertest'),
    chai = require('chai'),
    expect = chai.expect;

describe('Test GET listaEstudo', () => {
    it('deve retornar a lista de todas as listas de estudo', () => {
        request(app)
        .get('/listaEstudo')
        .end((err, res) => {
            expect('Content-Type', /json/);
            expect(res.statusCode).to.be.equal(200);
            expect(res.body).to.be.eql([]);
        });
    });
});

describe('Test POST listaEstudo', () => {
    it('deve retornar a lista de estudo criada quando é uma lista válida', () => {
        const disciplina = {'nome': 'Princípios de desenvolvimento web', 'professor': 'Gauds'};
        request(app)
        .post('/disciplina')
        .send(disciplina)
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            expect(res.body.nome).to.be.equal(disciplina.nome);
            expect(res.body.professor).to.be.equal(disciplina.professor);
        });
    });
});