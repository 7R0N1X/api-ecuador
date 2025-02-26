import { Province } from "./Province";
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db";

export const Region = sequelize.define(
  "Region",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    description: { type: DataTypes.TEXT, allowNull: false },
    country_id: { type: DataTypes.INTEGER, allowNull: true },
  },
  { tableName: "regions", timestamps: false }
);

Region.hasMany(Province, { foreignKey: "region_id", sourceKey: "id" });
Province.belongsTo(Region, { foreignKey: "region_id", targetKey: "id" });
