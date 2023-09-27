import express from "express";
import * as dotenv from "dotenv";
import PostRouter from "./routes/PostRoutes";

// Carrega as variáveis de ambiente a partir de um arquivo de configuração com base no ambiente (dev ou produção)
dotenv.config({ path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env" });

// Cria uma instância do aplicativo Express
const app = express();

// Define uma rota raiz para as rotas personalizadas definidas em "PostRouter"
app.use("/api", PostRouter);

// Verifica se a variável de ambiente "PORT" está definida
if (process.env.PORT) {
  // Inicia o servidor Express na porta especificada pela variável de ambiente "PORT"
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} else {
  // Se a variável de ambiente "PORT" não estiver definida, exibe uma mensagem de erro
  console.log("Fail to load environment");
}