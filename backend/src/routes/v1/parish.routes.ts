import { Router } from "express";
import { getParishes } from "../../controllers/v1/parish.controller";

export const parishRoutes = Router();

parishRoutes.get("/parishes", (req, res) => {
  const parroquias = getParishes();
  res.json(parroquias);
});
