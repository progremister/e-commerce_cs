import { Model, DataTypes } from "sequelize";

import sequelize from "../config/connection";
import Product from "./Product";

export interface CategoryAttributes {
  id?: number; //can be null as AutoIncremented
  category_name: string;
  products?: Product[]
}

//categorie class
class Category extends Model<CategoryAttributes> implements CategoryAttributes {
  public id?: number;
  public category_name!: string;
  public products?: Product[]; 
}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

export default Category;
