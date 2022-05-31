const mongoose = require('mongoose');
const request = require('supertest');
const connectDb = require('./db/db');
const app = require('./app');

describe('Database tests', () => {
  test('connectDb function', () => {
    expect(typeof connectDb).toBe('function');
  });
});

describe('Categories collection', () => {
  test('/GET categories', done => {
    request(app)
      .get('/categories/all')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('Locations collection', () => {
  afterAll(async () => {
    await mongoose.disconnect();
  });
  test('/GET locations', done => {
    request(app)
      .get('/locations/all')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  test('/POST create a new location', done => {
    const newLocation = {
      name: 'Cool place',
      position: { lat: 0, lon: 0 },
      category: 'culture',
      description: 'a very cool place',
      address: 'somewhere in Stockholm',
      directions: 'https://directionstothecoolplace.com',
    };
    request(app)
      .post('/locations/create')
      .send(newLocation)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  test('/POST create a new location - error', done => {
    const newLocation = {
      name: 'Place without complete information',
    };
    request(app)
      .post('/locations/create')
      .send(newLocation)
      .expect('Content-Type', /text/)
      .expect(400, done);
  });
  test('/GET one location', done => {
    request(app)
      .get('/locations/Cool place')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  test('/GET locations - not found', done => {
    request(app)
      .get('/locations/nowheretobefound')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(404, done);
  });
  test('/PUT update one location', done => {
    const updatedLocation = {
      name: 'Cool place',
      position: { lat: 1, lon: 1 },
      category: 'restaurants',
      description: 'a very cool place where we can eat',
      address: 'somewhere in Stockholm',
      directions: 'https://directionstothecoolplace.com',
    };
    request(app)
      .put('/locations/Cool place')
      .send(updatedLocation)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  test('/PUT update one location - not found', done => {
    const updatedLocation = {
      name: 'nowhere to be found v.2',
    };
    request(app)
      .put('/locations/nowhere to be found')
      .send(updatedLocation)
      .expect('Content-Type', /text/)
      .expect(404, done);
  });
  test('/DELETE delete one contact', done => {
    request(app)
      .delete('/locations/Cool place')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  test('/DELETE delete one contact - not found', done => {
    request(app)
      .delete('/locations/nowheretobefound')
      .expect('Content-Type', /text/)
      .expect(404, done);
  });
});
