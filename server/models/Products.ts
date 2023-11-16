import products from "../seeders/products";

export default (sequelize, DataTypes) => {
  const Products = sequelize.define("Products",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      classMethods: {
        associate(models) {
          Products.hasMany(models.Review);
          Products.hasMany(models.ProductCategory);
          Products.belongsToMany(models.Category, {
            through: models.ProductsCategories,
          });
          Products.hasMany(models.CartItem);
        },
      },
    }
  );

  // Seed products
  sequelize
    .sync()
    .then(() => {
      Products.findAndCountAll().then((result) => {
        if (!result || result.count === 0) {
          for (let i = 0; i < products.length; i++) {
            Products.create({
              name: products[i].name,
              description: products[i].description,
              price: products[i].price,
            });
          }
        }
      });
    })
    .catch((e) => {
      console.log("ERROR SYNCING WITH DB: ", e);
    });

  return Products;
};
