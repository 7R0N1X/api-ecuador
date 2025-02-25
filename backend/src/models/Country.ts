import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { Languages } from "./Languages";
import { Border } from "./Border";

export const Country = sequelize.define(
  "country",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    description: { type: DataTypes.TEXT, allowNull: false },
    capital_id: { type: DataTypes.INTEGER, allowNull: true, unique: true },
    surface: { type: DataTypes.INTEGER, allowNull: false },
    population: { type: DataTypes.INTEGER, allowNull: false },
    time_zone: { type: DataTypes.STRING, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false },
    currency_code: { type: DataTypes.STRING, allowNull: false },
    currency_symbol: { type: DataTypes.STRING, allowNull: false },
    iso_code: { type: DataTypes.STRING, allowNull: false },
    internet_domain: { type: DataTypes.STRING, allowNull: false },
    phone_prefix: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: "country", timestamps: false },
);

Country.hasMany(Languages, { foreignKey: "country_id", sourceKey: "id" });
Languages.belongsTo(Country, { foreignKey: "country_id", targetKey: "id" as "languages" });

Country.hasMany(Border, { foreignKey: "country_id", sourceKey: "id" });
Border.belongsTo(Country, { foreignKey: "country_id", targetKey: "id" });
