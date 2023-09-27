import { Router } from "express";
import PostController from "../controllers/PostControllers";

const PostRouter = Router();

PostRouter.get("/posts", PostController.listarPosts);

PostRouter.get("/post/:id", PostController.listarPosts);

PostRouter.post("/post", PostController.criarPost);

PostRouter.patch("/post/:id", PostController.atualizarPost);

PostRouter.delete("/post/:id", PostController.deletarPost);

export default PostRouter;