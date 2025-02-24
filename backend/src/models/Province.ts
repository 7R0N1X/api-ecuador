import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { Canton } from "./Canton";

export const Province = sequelize.define(
  "Province",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    capital_id: { type: DataTypes.INTEGER, allowNull: true },
    region_id: { type: DataTypes.INTEGER, allowNull: true },
  },
  { tableName: "provinces", timestamps: false }
);

Province.hasMany(Canton, { foreignKey: "province_id", sourceKey: "id" });
Canton.belongsTo(Province, { foreignKey: "province_id", targetKey: "id" });

Canton.hasOne(Province, { foreignKey: "capital_id", sourceKey: "id" });
Province.belongsTo(Canton, { foreignKey: "capital_id", targetKey: "id", as: "capital" });
