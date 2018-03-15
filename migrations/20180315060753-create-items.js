module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('items', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    category: {
      type: Sequelize.STRING,
    },
    brand: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    availableQuantity: {
      type: Sequelize.INTEGER,
    },
    cost: {
      type: Sequelize.FLOAT,
    },
    description: {
      type: Sequelize.STRING,
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('items'),
};
