import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const Parish = sequelize.define(
  "Parish",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    canton_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { tableName: "parishes", timestamps: false }
);
