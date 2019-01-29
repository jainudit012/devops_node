const request = require('supertest')
const router = require('../index')

describe('GET /', function() {
    it('respond with Hello World 2', function(done) {
        request(router).get('/api').expect('Hello World 2', done)
    })

afterEach(router.close())

})
