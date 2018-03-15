

module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define('items', {
    category: DataTypes.STRING,
    brand: DataTypes.STRING,
    title: DataTypes.STRING,
    availableQuantity: DataTypes.INTEGER,
    cost: DataTypes.FLOAT,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  }, { timestamps: false });
  items.associate = function (models) {
    // associations can be defined here
  };

  items.loadItems = itemArray => items.bulkCreate(itemArray);

  items.getAllItems = () => items.findAll();

  items.getNumberOfItems = () => items.count();

  items.getItemQuantity = id => items.findAll({
    attributes: ['availableQuantity'],
    where: {
      id,
    },
  });

  items.bulkUpsert = (itemsArray) => {
    const promiseArray = [];
    itemsArray.forEach((item) => {
      const updatePromise = items.upsert(item);
      promiseArray.push(updatePromise);
    });
    return Promise.all(promiseArray);
  };


  // Does not work in postgres
  // items.bulkUpsert = itemsArray => items.bulkCreate(itemsArray, {
  //   fields: ['id'],
  //   updateOnDuplicate: ['availableQuantity'],
  // });


  items.deleteAllItems = () => items.destroy({ truncate: true });

  return items;
};
