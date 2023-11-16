export default (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductsCategories', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
      },
      category_id: {
        type: DataTypes.STRING,
      },
    }, {
      classMethods: {
        associate(models) {
          ProductCategory.belongsTo(models.Products);
          ProductCategory.belongsTo(models.Categories);
        },
      },
    });
  
    return ProductCategory;
  };