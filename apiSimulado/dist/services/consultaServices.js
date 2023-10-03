"use strict";
// Aqui são feitos os Metodos e funções do projeto.
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Consulta {
    constructor() { }
    async criarConsulta(dado) {
        try {
            const consulta = await prisma.consulta.create({
                data: {
                    data: dado.data,
                    nomePcnte: dado.data,
                    nomeDents: dado.data,
                    pacienteId: dado.data,
                    secretariaId: dado.data
                }
            });
            return consulta;
        }
        catch (error) {
            throw new Error("Error ao criar uma consulta");
        }
    }
    async listarConsulta() {
        try {
            const consulta = await prisma.consulta.findMany();
            return consulta;
        }
        catch (error) {
            throw new Error("Error ao listar as Consultas");
        }
    }
    async updateConsulta(id, dado) {
        try {
            const consulta = await prisma.consulta.update({
                where: { id: id },
                data: dado.data
            });
            return consulta;
        }
        catch (error) {
            throw new Error("Error ao Atualizar as Consultas");
        }
    }
    async deletarConsulta(id) {
        try {
            const consulta = await prisma.consulta.delete({
                where: { id: id }
            });
            return consulta;
        }
        catch (error) {
            throw new Error("Error ao Deletar as consultas");
        }
    }
}
exports.default = new Consulta;
