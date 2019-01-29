const request = require('supertest')
const router = require('../index')

describe('GET /', function() {
    it('respond with a phrase', function(done) {
        request(router).get('/api').expect('Slack notifications must be working!!!', done)
    })
})
