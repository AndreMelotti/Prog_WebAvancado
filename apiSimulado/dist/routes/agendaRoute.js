"use strict";
// Nessa pasta é possivel verificar e Definir os caminhos das URL
// e definir as funções que serão feitas baseados nele
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agendaController_1 = __importDefault(require("../controllers/agendaController"));
const AgendaRouter = (0, express_1.Router)();
//AgendaRouter.get("/listar", AgendaController.listarAgendas);
AgendaRouter.post("/criar", agendaController_1.default.criarAgenda);
//AgendaRouter.get("/:id", AgendaController.obterAgenda);
//AgendaRouter.patch("/:id", AgendaController.atualizarAgenda);
//AgendaRouter.delete("/:id", AgendaController.deletarAgenda);
exports.default = AgendaRouter;
