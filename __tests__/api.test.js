const axios = require('axios');

const API_URL = process.env.API_URL || 'http://localhost:3001';

describe('Unit Tests', () => {
  test('GET / - should return Hello, World!', async () => {
    const response = await axios.get(`${API_URL}/`);
    
    expect(response.status).toBe(200);
    expect(response.data).toContain('Hello, World!');
    expect(response.headers['content-type']).toContain('text/html');
  });

  test('GET /health - should return OK', async () => {
    const response = await axios.get(`${API_URL}/health`);
    
    expect(response.status).toBe(200);
    expect(response.data).toBe('OK');
  });

  test('GET /route-inexistante - should return 404', async () => {
    try {
      await axios.get(`${API_URL}/route-inexistante`);
      fail('Should throw a 404 error');
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
