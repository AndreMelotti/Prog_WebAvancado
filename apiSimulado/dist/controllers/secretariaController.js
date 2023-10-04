"use strict";
// Controllers vão servir para controlar quando serão usadas as funções e metodos criados 
// no \services, de forma que utilizamos formas de verificação para analisar e ter certeza
// se uma requisição deu ou não certo.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const secretariaServices_1 = __importDefault(require("../services/secretariaServices"));
class secretariaController {
    constructor() { }
    async criarSecretaria(req, res) {
        try {
            const secretarias = secretariaServices_1.default.criarSecretaria(req.body);
            res.status(200).json({ status: "ok", secretarias: secretarias });
        }
        catch (error) {
            res.status(500).json({ status: "Error", message: error.message });
        }
    }
    async listarSecretaria(req, res) {
        try {
            const secretarias = await secretariaServices_1.default.listarSecretarias();
            res.status(200).json({ status: "ok", secretarias: secretarias });
        }
        catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
    async updateSecretaria(req, res) {
        try {
            const id = parseInt(req.params.id);
            const secretarias = secretariaServices_1.default.updateSecretarias(id, req.body);
            res.status(200).json({ status: "ok", secretarias: secretarias });
        }
        catch (error) {
            res.status(500).json({ status: "error", messagem: error.message });
        }
    }
    async deletarSecretaria(req, res) {
        try {
            const id = parseInt(req.params.id);
            const secretarias = secretariaServices_1.default.deletarSecretarias(id);
            res.status(200).json({ status: "ok", secretarias: secretarias });
        }
        catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
}
exports.default = new secretariaController;
