"use strict";
// Controllers vão servir para controlar quando serão usadas as funções e metodos criados 
// no \services, de forma que utilizamos formas de verificação para analisar e ter certeza
// se uma requisição deu ou não certo.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consultaServices_1 = __importDefault(require("../services/consultaServices"));
class consultaController {
    constructor() { }
    async criarConsulta(req, res) {
        try {
            const consulta = await consultaServices_1.default.criarConsulta(req.body);
            res.status(201).json({ status: "ok", consulta: consulta });
        }
        catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
    async listarConsultas(req, res) {
        try {
            const consultas = await consultaServices_1.default.listarConsulta();
            res.status(200).json({ status: "ok", consultas: consultas });
        }
        catch (error) {
            res.status(500).json({ status: "ok", message: error.message });
        }
    }
    async upedateConsultas(req, res) {
        try {
            const id = parseInt(req.params.id);
            const consultas = await consultaServices_1.default.updateConsulta(id, req.body);
            res.status(200).json({ status: "ok", consultas: consultas });
        }
        catch (error) {
            res.status(500).json({ status: "Error", message: error.message });
        }
    }
    async deletarConsultas(req, res) {
        try {
            const id = parseInt(req.params.id);
            const consultas = await consultaServices_1.default.deletarConsulta(id);
            res.status(200).json({ status: "ok", consultas: consultas });
        }
        catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
}
exports.default = new consultaController;
