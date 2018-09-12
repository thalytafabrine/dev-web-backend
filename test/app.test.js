const app = require('../server.js'),
    request = require('supertest'),
    chai = require('chai'),
    expect = chai.expect;

describe('Test GET user', () => {
    it('deve retornar o perfil do usuário', () => {
        request(app)
        .get('/user/thalytinha')
        .end(function(err, res) {
            expect('Content-Type', /json/);
            expect(res.statusCode).to.be.equal(200);
            expect(res.text).to.be.equal("Esse é o seu perfil!");
        });
    });
});

describe('Test GET disciplina', () => {
    it('deve retornar a lista de todas as disciplinas', () => {
        request(app)
        .get('/disciplina')
        .end(function(err, res) {
            expect('Content-Type', /json/);
            expect(res.statusCode).to.be.equal(200);
            expect(res.text).to.be.equal('[]');
        });
    });
});

describe('Test GET listaEstudo', () => {
    it('deve retornar a lista de todas as listas de estudo', () => {
        request(app)
        .get('/listaEstudo')
        .end(function(err, res) {
            expect('Content-Type', /json/);
            expect(res.statusCode).to.be.equal(200);
            expect(res.body).to.be.equal([]);
        });
    });
});