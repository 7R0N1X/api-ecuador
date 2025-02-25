import { Router } from "express";
import { getBorders } from "../../controllers/v1/border.controller";

export const borderRoutes = Router();

borderRoutes.get('/borders', async (req, res) => {
  const borders = await getBorders();
  res.json(borders);
})