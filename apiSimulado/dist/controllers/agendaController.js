"use strict";
// Controllers vão servir para controlar quando serão usadas as funções e metodos criados 
// no \services, de forma que utilizamos formas de verificação para analisar e ter certeza
// se uma requisição deu ou não certo.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agendaServices_1 = __importDefault(require("../services/agendaServices"));
class agendaController {
    constructor() { }
    async criarAgenda(req, res) {
        try {
            const agendas = await agendaServices_1.default.criarAgenda(req.body);
            res.status(200).json({ status: "ok", agenda: agendas });
        }
        catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
    async listarAgenda(req, res) {
        try {
            const agendas = await agendaServices_1.default.listarAgendas();
            res.status(200).json({ status: "ok", agenda: agendas });
        }
        catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
    async updateAgenda(req, res) {
        try {
            const id = parseInt(req.params.id); // Json é corno e trabalha com String, tem que transfromar o Id em inteiro antes
            const agendas = await agendaServices_1.default.updateAgenda(id, req.body);
            res.status(200).json({ status: "ok", agenda: agendas });
        }
        catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
    async deletarAgenda(req, res) {
        try {
            const id = parseInt(req.params.id);
            const agendas = await agendaServices_1.default.deletarAgenda(id);
            res.status(200).json({ status: "ok", agenda: agendas });
        }
        catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
}
exports.default = new agendaController;
