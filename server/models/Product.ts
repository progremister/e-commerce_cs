import { Model, DataTypes, Sequelize } from "sequelize";

import sequelize from "../config/connection";

export interface ProductAttributes {
  id?: number; //can be null as AutoIncremented
  product_name: string;
  description?: string;
  price: number;
  stock: number;
  category_id?: number;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id?: number;
  public product_name!: string;
  public description!: string;
  public price!: number;
  public stock!: number;
  public category_id?: number;
}

Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

export default Product;
