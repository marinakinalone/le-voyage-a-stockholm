const mongoose = require('mongoose');
const request = require('supertest');
const connectDb = require('./db/db');
const app = require('./app');

describe('Database tests', () => {
  afterAll(async () => {
    await mongoose.disconnect();
  });
  test('connectDb function', () => {
    expect(typeof connectDb).toBe('function');
  });
  test('/GET categories', done => {
    request(app)
      .get('/categories/all')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  test('/GET locations', done => {
    request(app)
      .get('/locations/all')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
