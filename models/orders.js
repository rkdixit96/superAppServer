module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    items: DataTypes.JSON,
  }, {});
  orders.associate = function (models) {
    // associations can be defined here
  };

  orders.createOrder = items => orders.create({
    items,
  });

  return orders;
};
