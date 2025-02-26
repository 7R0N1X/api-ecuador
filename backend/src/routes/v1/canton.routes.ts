import { Router } from "express";
import { getCantons } from "../../controllers/v1/canton.controller";

export const cantonRoutes = Router();

cantonRoutes.get("/cantons", async (req, res) => {
  const cantones = await getCantons();
  res.json(cantones);
});
