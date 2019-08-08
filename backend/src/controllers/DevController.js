// todas as rotas relacionadas a parte da criação de uma DEV, alteração, deletar, listar

// imports de dependências
const axios = require("axios");

// imports de componentes
const Dev = require("../models/Dev");

module.exports = {
  // metodo index
  async index(req, res) {
    const { user } = req.headers;
    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        // traz todos os usuários que o id naão seja igual ao que estou passando
        { _id: { $ne: user } },
        // traz todos os usuários que o id nao esteja dentro de uma lista
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } }
      ]
    });
    return res.json(users);
  },

  async store(req, res) {
    const { username } = req.body;

    // verifica se o usuário já existe no Banco
    const userExists = await Dev.findOne({ user: username });

    // se ele encontra o usuário que jaá existe ele retorna e não passa pelos passos de criar um usuário
    if (userExists) {
      return res.json(userExists);
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(dev);
  }
};
