import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: "mysql",
  logging: false,
});

export const db = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({force: true});
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};
