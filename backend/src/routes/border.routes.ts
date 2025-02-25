import { Router } from "express";
import { getBorders } from "../controllers/border.controller";

export const borderRoutes = Router();

borderRoutes.get('/country/ecuador/borders', async (req, res) => {
  const borders = await getBorders();
  res.json(borders);
})