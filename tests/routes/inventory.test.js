const Server = require('../../source/server');
const Models = require('../../models');

describe('Testing GET inventory API', () => {
  beforeEach((done) => {
    Models.items.deleteAllItems().then(() => {
      done();
    });
  });

  const options = {
    method: 'GET',
    url: '/inventory',
  };

  test('Response status code is 200', () => {
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });

  test('Database populated after call', () => {
    Server.inject(options, (response) => {
      Models.items.getNumberOfItems().then((count) => {
        expect(count).not.toBe(0);
      });
    });
  });
});
