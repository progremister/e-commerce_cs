import categories from '../seeders/categories';


export default (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      classMethods: {
        associate(models) {
          Categories.hasMany(models.ProductsCategories);
          Categories.belongsToMany(models.Product, { through: models.ProductsCategories });
        },
      },
    });
  
    // Seed categories
    sequelize.sync().then(() => {
      Categories.findAndCountAll()
        .then((result) => {
          if (!result || result.count === 0) {
            for (let i = 0; i < categories.length; i++) {
              Categories.create({
                name: categories[i].name,
              });
            }
          }
        });
    }).catch((e) => {
      console.log('ERROR SYNCING WITH DB: ', e);
    });
  
    return Categories;
  };