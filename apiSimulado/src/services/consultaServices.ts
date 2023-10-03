// Aqui são feitos os Metodos e funções do projeto.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Consulta{

    constructor(){}

    async criarConsulta(dado: any){
        try{
            const consultas = await prisma.consultas.create({
                data:{
                   data: dado.data,
                   nomePcnte: dado.data,
                   nomeDents: dado.data,
                   pacienteId: dado.data,
                   secretariaId: dado.data
                }
            });
            return consultas;
        }catch(error){
            throw new Error ("Error ao criar uma consulta")
        }
    }

    async listarConsulta(){
        try{
            const consultas = await prisma.consultas.findMany()
            return consultas;
        }catch(error){
            throw new Error ("Error ao listar as Consultas")
        }
    }

    async updateConsulta(id: number, dado: any){
        try{
            const consultas = await prisma.consultas.update({
                where: {id: id},
                data: dado.data
            });
            return consultas;
        }catch(error){
            throw new Error ("Error ao Atualizar as Consultas")
        }
    }

    async deletarConsulta(id: number){
        try{
            const consultas = await prisma.consultas.delete({
                where: {id: id}
            });
            return consultas;
        }catch(error){
            throw new Error ("Error ao Deletar as consultas")
        }
    }
}

export default new Consulta