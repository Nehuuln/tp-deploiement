const request = require('supertest');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3001';

describe('API Tests', () => {
  test('GET / should return counter page with button', async () => {
    const response = await request(BASE_URL).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Compteur');
    expect(response.text).toContain('<button onclick="increment()">+1</button>');
    expect(response.text).toContain('<div id="counter">0</div>');
  });

  test('GET /health should return OK', async () => {
    const response = await request(BASE_URL).get('/health');
    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });
});
