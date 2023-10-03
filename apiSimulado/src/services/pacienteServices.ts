// Aqui são feitos os Metodos e funções do projeto.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Paciente{
    
    constructor(){}

    async criarPaciente(dado: any){
        try{
            const pacientes = await prisma.pacientes.create({
                data:{
                    nomePcnte: dado.data,
                    senha: dado.data,
                    usuario: dado.data
                }
            });
            return pacientes;
        }catch(error){
            throw new Error ("Error ao criar pacientes")
        }
    }

    async listarPaciente(){
        try {
            const pacientes = await prisma.pacientes.findMany()
            return pacientes;
        }catch (error){
            throw new Error ("Error ao listar pacientes")
        }
    }

    async updatePaciente(id: number, dado: any){
        try{
            const pacientes = await prisma.pacientes.update({
                where: {id: id},
                data: dado
            });
            return pacientes;
        }catch(error){
            throw new Error ("Error ao Atualizar")
        }
    }

    async deletarPaciente(id: number){
        try {
            const pacientes = await prisma.pacientes.delete({
                where: {id: id}
            });
            return pacientes;
        }catch(error){
            throw new Error ("Error ao Deletar a lsita")
        }
    }
}

export default new Paciente