"use strict";
// Aqui são feitos os Metodos e funções do projeto.
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class secretariaServices {
    constructor() { }
    async criarSecretaria(dado) {
        try {
            const secretaria = await prisma.secretaria.create({
                data: {
                    nome: dado.data,
                    RG: dado.data,
                }
            });
            return secretaria;
        }
        catch (error) {
            throw new Error("Error ao criar secretarias");
        }
    }
    async listarSecretarias() {
        try {
            const secretaria = await prisma.secretaria.findMany();
            return secretaria;
        }
        catch (error) {
            throw new Error("Error ao listar secretarias");
        }
    }
    async updateSecretarias(id, dado) {
        try {
            const secretaria = await prisma.secretaria.update({
                where: { id: id },
                data: dado
            });
            return secretaria;
        }
        catch (error) {
            throw new Error("Error ao Atualizar");
        }
    }
    async deletarSecretarias(id) {
        try {
            const secretaria = await prisma.secretaria.delete({
                where: { id: id }
            });
            return secretaria;
        }
        catch (error) {
            throw new Error("Error ao Deletar a lsita");
        }
    }
}
exports.default = new secretariaServices;
