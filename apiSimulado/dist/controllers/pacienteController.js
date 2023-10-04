"use strict";
// Controllers vão servir para controlar quando serão usadas as funções e metodos criados 
// no \services, de forma que utilizamos formas de verificação para analisar e ter certeza
// se uma requisição deu ou não certo.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pacienteServices_1 = __importDefault(require("../services/pacienteServices"));
class pacienteController {
    constructor() { }
    async criarPaciente(req, res) {
        try {
            const paciente = await pacienteServices_1.default.criarPaciente(req.body);
            res.status(200).json({ status: "ok", paciente: paciente });
        }
        catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
    async listarPaciente(req, res) {
        try {
            const pacientes = await pacienteServices_1.default.listarPaciente();
            res.status(200).json({ status: "ok", pacientes: pacientes });
        }
        catch (error) {
            res.status(500).json({ status: "ok", message: error.message });
        }
    }
    async updatePaciente(req, res) {
        try {
            const id = parseInt(req.params.id);
            const pacientes = await pacienteServices_1.default.updatePaciente(id, req.body);
            res.status(200).json({ status: "ok", pacientes: pacientes });
        }
        catch (error) {
            res.status(500).json({ status: "Error", message: error.message });
        }
    }
    async deletarPaciente(req, res) {
        try {
            const id = parseInt(req.params.id);
            const pacientes = await pacienteServices_1.default.deletarPaciente(id);
            res.status(200).json({ status: "ok", pacientes: pacientes });
        }
        catch (error) {
            res.status(500).json({ status: "ok", message: error.message });
        }
    }
}
exports.default = new pacienteController;
