import { Router } from "express";
import { getParishes } from "../controllers/parish.controller";

export const parishRoutes = Router();

parishRoutes.get("/parroquias", (req, res) => {
  const parroquias = getParishes();
  res.json(parroquias);
});
