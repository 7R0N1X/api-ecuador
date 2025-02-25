import express from "express";
import { regionRoutes } from "./routes/region.routes";
import { provinceRoutes } from "./routes/province.routes";
import { cantonRoutes } from "./routes/canton.routes";
import { parishRoutes } from "./routes/parish.routes";
import { countryRoutes } from "./routes/country.routes";
import { languageRoutes } from "./routes/language.routes";
import { borderRoutes } from "./routes/border.routes";

export const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use("/api", countryRoutes);
app.use("/api", borderRoutes);
app.use("/api", languageRoutes);
app.use("/api", regionRoutes);
app.use("/api", provinceRoutes);
app.use("/api", cantonRoutes);
app.use("/api", parishRoutes);
