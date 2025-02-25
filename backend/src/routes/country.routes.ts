import { getCountry } from "../controllers/country.controller";
import { Router } from "express";

export const countryRoutes = Router();

countryRoutes.get("/country/ecuador", async (req, res) => {
  const country = await getCountry();
  res.json(country);
});
