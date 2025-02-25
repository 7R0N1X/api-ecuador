import { Router } from "express";
import { getCantons } from "../../controllers/v1/canton.controller";

export const cantonRoutes = Router();

cantonRoutes.get("/cantons", (req, res) => {
  const cantones = getCantons();
  res.json(cantones);
});
