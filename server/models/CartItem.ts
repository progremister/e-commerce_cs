import { Model, DataTypes } from "sequelize";

import sequelize from "../config/connection";

export interface CartItemAttributes {
  id: number;
  product_id: number;
}

//categorie class
class CartItem extends Model<CartItemAttributes> implements CartItemAttributes {
  public id!: number;
  public product_id!: number;
}

CartItem.init(
  {
    // define columns
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

export default CartItem;
