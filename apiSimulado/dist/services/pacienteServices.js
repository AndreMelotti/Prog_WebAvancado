"use strict";
// Aqui são feitos os Metodos e funções do projeto.
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Paciente {
    constructor() { }
    async criarPaciente() {
    }
    async listarPaciente() {
    }
    async updatePaciete() {
    }
    async deletarPaciente() {
    }
}
exports.default = new Paciente;
