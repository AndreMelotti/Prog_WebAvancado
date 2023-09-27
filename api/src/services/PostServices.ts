import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostServices {
  constructor() {}

  async listarPosts() {
    try {
      const posts = await prisma.post.findMany();
      return posts;
    } catch (error) {
      console.log(error);
    }
  }

  async criarPost() {}

  async atualizarPost() {}

  async deletarPost(id: number) {}
}

export default new PostServices();