

module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define('items', {
    category: DataTypes.STRING,
    brand: DataTypes.STRING,
    title: DataTypes.STRING,
    availableQuantity: DataTypes.INTEGER,
    cost: DataTypes.FLOAT,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  }, {});
  items.associate = function (models) {
    // associations can be defined here
  };

  items.loadItems = itemArray => items.bulkCreate(itemArray);

  items.getAllItems = () => items.findAll();

  items.getNumberOfItems = () => items.count();

  items.deleteAllItems = () => items.destroy({ truncate: true });

  return items;
};
