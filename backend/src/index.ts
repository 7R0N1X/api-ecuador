import dotenv from "dotenv";
dotenv.config();

import { app } from "./app";
import { db } from "./config/db";

const PORT = process.env.PORT || 3000;

const initServer = async () => {
  await db();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

initServer();
