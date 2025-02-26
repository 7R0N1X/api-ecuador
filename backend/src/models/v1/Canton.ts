import { Country } from "./Country";
import { Parish } from "./Parish";
import { sequelize } from "../../config/db";
import { DataTypes } from "sequelize";

export const Canton = sequelize.define(
  "Canton",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    province_id: { type: DataTypes.INTEGER, allowNull: true },
  },
  { tableName: "cantons", timestamps: false }
);

Canton.hasMany(Parish, { foreignKey: "canton_id", sourceKey: "id" });
Parish.belongsTo(Canton, { foreignKey: "canton_id", targetKey: "id" });

Canton.hasOne(Country, { foreignKey: "capital_id", sourceKey: "id" });
Country.belongsTo(Canton, { foreignKey: "capital_id", targetKey: "id", as: "capital" });
