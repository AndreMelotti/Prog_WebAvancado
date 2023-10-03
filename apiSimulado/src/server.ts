import { Express } from "express";
import * as dotenv from "dotenv";

//Importar as rotas
import pacienteRouter from "./routes/pacienteRoute";
import secretariaRoute from "./routes/secretariaRoute";
import consultaRoute from "./routes/consultaRoute";
import agendaRoute from "./routes/agendaRoute";