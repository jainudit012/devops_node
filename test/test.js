const request = require('supertest')
const router = require('../index')

describe('GET /', function() {
    it('respond with Udit Jain is awesome!!!', function(done) {
        request(router).get('/api').expect('Udit Jain is awesome!!!', done)
    })
})
