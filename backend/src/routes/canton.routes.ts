import { Router } from "express";
import { getCantons } from "../controllers/canton.controller";

export const cantonRoutes = Router();

cantonRoutes.get("/cantones", (req, res) => {
  const cantones = getCantons();
  res.json(cantones);
});
