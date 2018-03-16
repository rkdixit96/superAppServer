const Server = require('../../source/server');
const Models = require('../../models');

describe('Testing GET inventory API', () => {
  const options = {
    method: 'POST',
    url: '/order',
  };

  test('Response status code is 201', () => {
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(201);
    });
  });
});
