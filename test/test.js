const request = require('supertest')
const router = require('../index.js')

describe('GET /', function() {
    it('respond with OK', function(done) {
        request(router).get('/').expect('OK', done)
    })
})
