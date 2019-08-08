// metodos , GET, POST, PUT, DELETE
// recebe na rota raiz a requisição e a resposta
// requisição: traz todas informações referente as requisições do usuário
// resposta: é o objeto que se utiliza para o servidor retornar uma resposta para o cliente

const express = require("express");

// imports dos controllers
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");
// responsavel pelas rotas
const routes = express.Router();

// rota para listagem de DEVS
routes.get("/devs", DevController.index);
// criando um dev
routes.post("/devs", DevController.store);
// rota para like
routes.post("/devs/:devId/likes", LikeController.store);
// rota oara dislike
routes.post("/devs/:devId/dislikes", DislikeController.store);

module.exports = routes;
