import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test Endpoint ', () => {
  it('Gets The API Endpoint Test', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});

describe('Test The Actual Image Processing Endpoint', () => {
  it('Gets The API Endpoint Test', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
});
