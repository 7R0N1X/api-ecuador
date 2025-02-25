import { Router } from "express";
import { getRegions } from "../controllers/region.controller";

export const regionRoutes = Router();

regionRoutes.get("/country/ecuador/regions", async (req, res) => {
  const regions = await getRegions();
  res.json(regions);
});
