import { Router } from "express";
import { getParishes } from "../../controllers/v1/parish.controller";

export const parishRoutes = Router();

parishRoutes.get("/parishes", async (req, res) => {
  const parroquias = await getParishes();
  res.json(parroquias);
});
