const request = require('supertest');
const app = require('./app');

test('returns all types of locations', done => {
  request(app)
    .get('/types')
    .expect(200, done);
});
