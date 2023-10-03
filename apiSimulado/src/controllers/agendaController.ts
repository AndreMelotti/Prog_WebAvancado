// Controllers vão servir para controlar quando serão usadas as funções e metodos criados 
// no \services, de forma que utilizamos formas de verificação para analisar e ter certeza
// se uma requisição deu ou não certo.

import { Request, Response } from "express";
import agendaServices from "../services/agendaServices";

class agendaController{

    constructor(){}

      async criarAgenda(req: Request, res: Response) {
        try {
          const agendas = await agendaServices.criarAgenda(req.body);
          res.status(201).json({ status: "ok", agenda: agendas });
        } catch (error) {
          res.status(500).json({ status: "error", message: (error as any).message });
        }
      }
}

export default new agendaController