import { Model, DataTypes } from "sequelize";

import sequelize from "../config/connection";

export interface CategoryAttributes {
  id: number;
  category_name: string;
}

//categorie class
class Category extends Model<CategoryAttributes> implements CategoryAttributes {
  public id!: number;
  public category_name!: string;
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
