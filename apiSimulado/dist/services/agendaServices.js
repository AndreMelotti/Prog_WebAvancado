"use strict";
// Aqui são feitos os Metodos e funções do projeto.
// Dica dita pelo prfessor (Otavio), sempre criar uma classe com todos os metodos e exportar
// a classe direto.
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class agendaServices {
    constructor() { }
    async criarAgenda(dado) {
        try {
            const agendas = await prisma.agenda.create({
                data: {
                    data: dado.data,
                    nomePcnt: dado.nomePcnt
                }
            });
            return agendas;
        }
        catch (error) {
            throw new Error("Error ao criar uma nova Agenda"); // Esse comando faz sinaliza que algo inesperado aconteceu e que o fluxo normal do programa deve ser interrompido.
        }
    }
    async listarAgendas() {
    }
    async updateAgenda() {
    }
    async deletarAgenda() {
    }
}
exports.default = new agendaServices;
