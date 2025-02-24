import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { Province } from "./Province";

export const Region = sequelize.define("Region", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

Region.hasMany(Province, { foreignKey: "region_id", sourceKey: "id" });
Province.belongsTo(Region, { foreignKey: "region_id", targetKey: "id" });
