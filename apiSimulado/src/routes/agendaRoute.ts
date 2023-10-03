// Nessa pasta é possivel verificar e Definir os caminhos das URL
// e definir as funções que serão feitas baseados nele

import { Router } from "express";
import AgendaController from "../controllers/agendaController";

const AgendaRouter = Router();

//AgendaRouter.get("/listar", AgendaController.listarAgendas);
AgendaRouter.post("/criar", AgendaController.criarAgenda);
//AgendaRouter.get("/:id", AgendaController.obterAgenda);
//AgendaRouter.patch("/:id", AgendaController.atualizarAgenda);
//AgendaRouter.delete("/:id", AgendaController.deletarAgenda);

export default AgendaRouter;