// Aqui são feitos os Metodos e funções do projeto.
// Dica dita pelo prfessor (Otavio), sempre criar uma classe com todos os metodos e exportar
// a classe direto.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class agendaServices{

    constructor(){}

    async criarAgenda(dado: any){                           // C do CRUD
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

    async listarAgendas(){                                      // R do CRUD
        try{
            const agendas = await prisma.agendas.findMany();
            return agendas;
        }catch (error){
                throw new Error ("Error ao listar as agendas")
            } 
    }

    async updateAgenda(id: number, dado: any){                                       // U do CRUD
        try{
            const agendas = await prisma.agendas.update({
                where: { id : id},
                data: dado
            });
            return agendas;
        }catch (error){
            throw new Error ("Error ao Atualizar a lista")
        }
    }

    async deletarAgenda(id : number){                                      // D do CRUD
        try{
            const agendas = await prisma.agendas.delete({
                where: {id : id}
            });
            return agendas;
        }catch(error){
            throw new Error ("Error ao Deletar a lista")
        }
    }


}

export default new agendaServices