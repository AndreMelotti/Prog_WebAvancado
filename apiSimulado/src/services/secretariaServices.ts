// Aqui são feitos os Metodos e funções do projeto.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class secretariaServices{

    constructor(){}

    async criarSecretaria(dado: any){
        try{
            const secretaria = await prisma.secretaria.create({
                data:{
                    nome: dado.data,
                    RG: dado.data,
                }
            });
            return secretaria;
        }catch(error){
            throw new Error ("Error ao criar secretarias")
        }
    }

    async listarSecretarias(){
        try {
            const secretaria = await prisma.secretaria.findMany()
            return secretaria;
        }catch (error){
            throw new Error ("Error ao listar secretarias")
        }
    }

    async updateSecretarias(id: number, dado: any){
        try{
            const secretaria = await prisma.secretaria.update({
                where: {id: id},
                data: dado
            });
            return secretaria;
        }catch(error){
            throw new Error ("Error ao Atualizar")
        }
    }

    async deletarSecretarias(id: number){
        try {
            const secretaria = await prisma.secretaria.delete({
                where: {id: id}
            });
            return secretaria;
        }catch(error){
            throw new Error ("Error ao Deletar a lsita")
        }
    }
}

export default new secretariaServices