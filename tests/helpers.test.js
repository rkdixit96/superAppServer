const Helpers = require('../source/helpers');
const Constants = require('../source/constants');

describe('Testing helpers', () => {
  test('Get data from https url', (done) => {
    Helpers.getDataFromURL(Constants.inventoryLink).then((data) => {
      const dataJSON = JSON.parse(data);
      expect(dataJSON).toHaveProperty('inventory');
    });
    done();
  });
});
