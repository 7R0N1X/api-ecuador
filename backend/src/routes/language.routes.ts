import { Router } from "express";
import { getLanguages } from "../controllers/language.controller";

export const languageRoutes = Router();

languageRoutes.get("/country/ecuador/languages", async (req, res) => {
  const languages = await getLanguages();
  res.json(languages);
})