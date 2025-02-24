import express from "express";
import { provinceRoutes } from "./routes/province.routes";
import { cantonRoutes } from "./routes/canton.routes";
import { parishRoutes } from "./routes/parish.routes";

export const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use("/api", provinceRoutes);
app.use("/api", cantonRoutes);
app.use("/api", parishRoutes);
