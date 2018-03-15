const Helpers = require('../helpers');
const Constants = require('../constants');
const Models = require('../../models');

module.exports = [{
  method: 'GET',
  path: '/inventory',
  handler: (request, response) => {
    // Check if database is loaded
    // If not get data from url and store in database
    // Else get data from database and send response
    Helpers.getDataFromURL(Constants.inventoryLink).then((inventory) => {
      Models.items.loadItems(inventory.inventory).then(() => {
        response(inventory);
      });
    });
  },
}];

