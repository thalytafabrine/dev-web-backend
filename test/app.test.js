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