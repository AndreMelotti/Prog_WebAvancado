import { Request, Response } from "express";
import PostServices from "../services/PostServices";

// Define uma classe chamada PostController para lidar com as solicitações relacionadas a posts
class PostController {
    constructor() {}
  
    // Método para listar todos os posts
    async listarPosts(req: Request, res: Response) {
      // Chama o serviço para listar os posts
      const posts = await PostServices.listarPosts();
      
      // Retorna uma resposta JSON com os posts e um status HTTP 200 (OK)
      return res.status(200).json({
        status: "ok",
        posts: posts,
      });
    }
  
    // Método para atualizar um post (ainda não implementado)
    async atualizarPost(req: Request, res: Response) {
      // Retorna uma resposta de texto simples indicando que a atualização está pendente
      return res.send("Atualizar Posts (Ainda não implementado)");
    }
  
    // Método para criar um novo post (ainda não implementado)
    async criarPost(req: Request, res: Response) {
      // Retorna uma resposta de texto simples indicando que a criação está pendente
      return res.send("Criar Posts (Ainda não implementado)");
    }
  
    // Método para deletar um post (ainda não implementado)
    async deletarPost(req: Request, res: Response) {
      // Retorna uma resposta de texto simples indicando que a exclusão está pendente
      return res.send("Deletar Posts (Ainda não implementado)");
    }
  }
  
  // Exporta uma instância da classe PostController para uso em outros lugares
  export default new PostController();