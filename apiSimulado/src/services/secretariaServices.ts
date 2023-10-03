// Aqui são feitos os Metodos e funções do projeto.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class secretariaServices{

    constructor(){}

    async criarSecretaria(dado: any){
        try{
            const secretarias = await prisma.secretarias.create({
                data:{
                    nome: dado.data,
                    RG: dado.data,
                }
            });
            return secretarias;
        }catch(error){
            throw new Error ("Error ao criar secretarias")
        }
    }

    async listarSecretarias(){
        try {
            const secretarias = await prisma.secretarias.findMany()
            return secretarias;
        }catch (error){
            throw new Error ("Error ao listar secretarias")
        }
    }

    async updateSecretarias(id: number, dado: any){
        try{
            const secretarias = await prisma.secretarias.update({
                where: {id: id},
                data: dado
            });
            return secretarias;
        }catch(error){
            throw new Error ("Error ao Atualizar")
        }
    }

    async deletarSecretarias(id: number){
        try {
            const secretarias = await prisma.secretarias.delete({
                where: {id: id}
            });
            return secretarias;
        }catch(error){
            throw new Error ("Error ao Deletar a lsita")
        }
    }
}

export default new secretariaServices