export default (sequelize, DataTypes) => {
    const CartItem = sequelize.define('CartItem', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      classMethods: {
        associate(models) {
          CartItem.belongsTo(models.Product /*, { foreignKey: 'product_id' }*/);
        },
      },
    });
  
    return CartItem;
  };