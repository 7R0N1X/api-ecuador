import { Router } from "express";
import { getProvinces } from "../../controllers/v1/province.controller";

export const provinceRoutes = Router();

provinceRoutes.get("/provinces", async (req, res) => {
  const parishes = await getProvinces();
  res.json(parishes);
});
