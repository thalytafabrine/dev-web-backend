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
        const lista = {
            'name': 'Conceitos de computação',
            'terms': ["graduação"],
            'definitions': ["dor e sofrimento"]};
        request(app)
        .post('/listaEstudo')
        .send(lista)
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            expect(res.body.name).to.be.equal(lista.name);
            expect(res.body.terms).to.be.equal(lista.terms);
            expect(res.body.definitions).to.be.equal(lista.definitions);
        });
    });
});