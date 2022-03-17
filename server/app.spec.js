const supertest = require('supertest');
const api = require('./app');

const { app } = api;
const request = supertest(app);

test('returns all types of locations', async () => {
  const response = await request.get('/types');
  expect(response.status).toBe(200);
});
