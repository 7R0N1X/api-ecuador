import express from "express";
import { countryRoutes } from "./routes/v1/country.routes";
import { borderRoutes } from "./routes/v1/border.routes";
import { languageRoutes } from "./routes/v1/language.routes";
import { regionRoutes } from "./routes/v1/region.routes";
import { provinceRoutes } from "./routes/v1/province.routes";
import { cantonRoutes } from "./routes/v1/canton.routes";
import { parishRoutes } from "./routes/v1/parish.routes";


export const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use("/api/v1/country/ecuador", countryRoutes);
app.use("/api/v1/country/ecuador", borderRoutes);
app.use("/api/v1/country/ecuador", languageRoutes);
app.use("/api/v1/country/ecuador", regionRoutes);
app.use("/api/v1/country/ecuador", provinceRoutes);
app.use("/api/v1/country/ecuador", cantonRoutes);
app.use("/api/v1/country/ecuador", parishRoutes);
