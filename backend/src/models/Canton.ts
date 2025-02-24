import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { Parish } from "./Parish";

export const Canton = sequelize.define(
  "Canton",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { tableName: "cantons", timestamps: false }
);

Canton.hasMany(Parish, { foreignKey: "canton_id", sourceKey: "id" });
Parish.belongsTo(Canton, { foreignKey: "canton_id", targetKey: "id" });
