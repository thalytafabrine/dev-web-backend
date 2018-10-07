const app = require('../server.js'),
    request = require('supertest'),
    chai = require('chai'),
    expect = chai.expect;

describe('Test POST usuario', () => {
    it('deve retornar o usuário criado quando é um usuário válido', () => {
        const usuario = {'username': 'thalyta', 'password': 'senha123'};
        request(app)
        .post('/user')
        .send(usuario)
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(201);
            expect(res.body.username).to.be.equal(usuario.username);
            expect(res.body.password).to.not.be.equal(usuario.password);
        });
    });
});