const app = require('../server.js'),
    request = require('supertest'),
    chai = require('chai'),
    expect = chai.expect;

describe('Test GET disciplina', () => {
    it('deve retornar a lista de todas as disciplinas', () => {
        request(app)
        .get('/disciplina')
        .end((err, res) => {
            expect('Content-Type', /json/);
            expect(res.statusCode).to.be.equal(200);
            expect(res.text).to.be.eql([]);
        });
    });
});

describe('Test POST disciplina', () => {
    it('deve retornar a disciplina criada quando é uma disciplina válida', () => {
        const disciplina = {'name': 'Princípios de desenvolvimento web', 'teacher': 'Gauds'};
        request(app)
        .post('/disciplina')
        .send(disciplina)
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            expect(res.body.name).to.be.equal(disciplina.name);
            expect(res.body.teacher).to.be.equal(disciplina.teacher);
        });
    });
});