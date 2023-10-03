// Aqui são feitos os Metodos e funções do projeto.
// Dica dita pelo prfessor (Otavio), sempre criar uma classe com todos os metodos e exportar
// a classe direto.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class agendaServices{

    constructor(){

    }

    async criarAgenda(dado: any){
        try{
            const agendas = await prisma.agenda.create({
                data: {                                     // o prisma reconhece data como padrão tentei mudar e deu merda
                    data: dado.data,
                    nomePcnt: dado.nomePcnt
                }
            });
            return agendas;
        } catch(error){
            throw new Error("Error ao criar uma nova Agenda")   // Esse comando faz sinaliza que algo inesperado aconteceu e que o fluxo normal do programa deve ser interrompido.
        }
    }
}

export default agendaServices