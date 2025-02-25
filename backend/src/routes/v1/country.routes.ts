import { Router } from "express";
import { getCountry } from "../../controllers/v1/country.controller";

export const countryRoutes = Router();

countryRoutes.get("/", async (req, res) => {
  const country = await getCountry();
  res.json(country);
});
