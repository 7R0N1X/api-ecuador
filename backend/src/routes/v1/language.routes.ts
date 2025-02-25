import { Router } from "express";
import { getLanguages } from "../../controllers/v1/language.controller";

export const languageRoutes = Router();

languageRoutes.get("/languages", async (req, res) => {
  const languages = await getLanguages();
  res.json(languages);
});
