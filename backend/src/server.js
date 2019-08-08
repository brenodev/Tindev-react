//import do express para ter acesso ao express, que é uma função, que quando
//chamado ela cria um novo servidor, e é basicamente uma porta de entrada que
//pode receber requisições e retornar respostas
const express = require("express");

// OD para banco de dados
const mongoose = require("mongoose");

// permite que meu servidor seja acessada por qualquer endereço
const cors = require("cors");

// conexão com banco de dados
mongoose.connect(
  "mongodb+srv://omnistack:12345@cluster0-nujg2.mongodb.net/omnistack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

const routes = require("./routes");

// novo servidor do express
const server = express();

server.use(cors());
// faz com que o servidor entenda requisições JSON
server.use(express.json());

// usando as rotas
server.use(routes);

// porta onde vai rodar o servidor
server.listen(3333);
