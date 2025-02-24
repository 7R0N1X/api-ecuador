import { Router } from "express";
import { getProvinces } from "../controllers/province.controller";

export const provinceRoutes = Router();

provinceRoutes.get("/provincias", async (req, res) => {
  const parishes = await getProvinces();
  res.json(parishes);
});
