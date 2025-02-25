import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db";

export const Border = sequelize.define("border", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  country_id: { type: DataTypes.INTEGER, allowNull: false },
}, {tableName: "borders", timestamps: false});
