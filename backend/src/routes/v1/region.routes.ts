import { Router } from "express";
import { getRegions } from "../../controllers/v1/region.controller";

export const regionRoutes = Router();

regionRoutes.get("/regions", async (req, res) => {
  const regions = await getRegions();
  res.json(regions);
});
