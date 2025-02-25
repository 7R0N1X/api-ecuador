import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.MYSQL_URL!, {
  dialect: "mysql",
  logging: false,
});

export const db = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};
