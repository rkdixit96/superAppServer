const Server = require('../../source/server');

describe('Testing GET inventory API', () => {
  test('Response status code is 200', () => {
    const options = {
      method: 'GET',
      url: '/inventory',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});
