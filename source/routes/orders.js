const Models = require('../../models');


const validateOrder = (itemArray) => {
  const promiseArray = [];
  for (let itemInd = 0; itemInd < itemArray.length; itemInd += 1) {
    const item = itemArray[itemInd];
    const validPromise = Models.items.getItemQuantity(item.id).then(itemValue => (itemValue[0].availableQuantity - item.availableQuantity >= 0));
    promiseArray.push(validPromise);
  }
  return Promise.all(promiseArray);
};

// const objectToArray = (object) => {
//   const keys = Object.keys(object);
//   let result = [];
//   keys.forEach((key) => {
//     result = result.concat(object[key][0]);
//   });
//   return result;
// };
const objectToArray = (object) => {
  const keys = Object.keys(object);
  let result = [];
  keys.forEach((key) => {
    object[key].forEach((item) => {
      result = result.concat(item);
    });
  });
  return result;
};

const allTrue = (boolArray) => {
  for (let boolInd = 0; boolInd < boolArray.length; boolInd += 1) {
    if (boolArray[boolInd] === false) {
      return false;
    }
  }
  return true;
};

module.exports = [{
  method: 'POST',
  path: '/order',
  handler: (request, response) => {
    const basket = request.payload.basketData;
    const itemArray = objectToArray(basket);
    validateOrder(itemArray).then((validValues) => {
      if (allTrue(validValues)) {
        const inventory = request.payload.inventoryData;
        const inItemArray = objectToArray(inventory);
        Models.items.bulkUpsert(inItemArray).then(() => {
          Models.orders.createOrder(itemArray).then(() => {
            response({
              valid: true,
              inventoryUpdated: true,
              orderCreated: true,
            });
          });
        });
      } else {
        response({
          valid: false,
        });
      }
    });
    // Validate order
    // Update inventory
    // Create order entry
  },
},
{
  method: 'GET',
  path: '/orders',
  handler: (request, response) => {
    Models.orders.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
    }).then((orders) => {
      response({
        orders,
      });
    });
  },
}];

