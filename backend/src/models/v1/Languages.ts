import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db";

export const Languages = sequelize.define("languages", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  country_id: { type: DataTypes.INTEGER, allowNull: true },
}, { tableName: "languages", timestamps: false });
