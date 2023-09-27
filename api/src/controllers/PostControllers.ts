import { Request, Response } from "express";
import PostServices from "../services/PostServices";

class PostController {
  constructor() {}

  async listarPosts(req: Request, res: Response) {
    const posts = await PostServices.listarPosts();
    return res.status(200).json({
      status: "ok",
      posts: posts,
    });
  }
  async atualizarPost(req: Request, res: Response) {
    return res.send("Atualizar Posts");
  }
  async criarPost(req: Request, res: Response) {
    return res.send("Criar Posts");
  }
  async deletarPost(req: Request, res: Response) {
    return res.send("Deletar Posts");
  }
}

export default new PostController();