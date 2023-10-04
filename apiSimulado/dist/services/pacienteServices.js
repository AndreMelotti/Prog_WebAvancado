"use strict";
// Aqui são feitos os Metodos e funções do projeto.
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Paciente {
    constructor() { }
    async criarPaciente(dado) {
        try {
            const paciente = await prisma.paciente.create({
                data: {
                    nomePcnte: dado.nomePcnte,
                    senha: dado.senha,
                    usuario: dado.usuario
                }
            });
            return paciente;
        }
        catch (error) {
            console.log(error);
            throw new Error("Error ao criar pacientes");
        }
    }
    async listarPaciente() {
        try {
            const paciente = await prisma.paciente.findMany();
            return paciente;
        }
        catch (error) {
            throw new Error("Error ao listar pacientes");
        }
    }
    async updatePaciente(id, dado) {
        try {
            const paciente = await prisma.paciente.update({
                where: { id: id },
                data: dado
            });
            return paciente;
        }
        catch (error) {
            throw new Error("Error ao Atualizar");
        }
    }
    async deletarPaciente(id) {
        try {
            const paciente = await prisma.paciente.delete({
                where: { id: id }
            });
            return paciente;
        }
        catch (error) {
            throw new Error("Error ao Deletar a lsita");
        }
    }
}
exports.default = new Paciente;
