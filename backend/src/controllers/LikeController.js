const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    // acessando um paramentro que vem direto da rota
    // console.log(req.params.devId);
    // console.log(req.headers.user);
    // desestruturação das informações
    const { user } = req.headers;
    const { devId } = req.params;

    // buscando a instancia do banco para usuario logado
    const loggedDev = await Dev.findById(user);

    // instancia para usuario alvo, quem recebe o like
    const targetDev = await Dev.findById(devId);

    // verifica se o usuário existe
    if (!targetDev) {
      return res.status(400).json({ error: "Dev not exists" });
    }
    // verifica targetdev ja tem um like pelo loggeddev
    if (targetDev.likes.includes(loggedDev._id)) {
      console.log("DEU MATCH");
    }
    // pega dev logado e pega a informação que é um vetor JS
    loggedDev.likes.push(targetDev._id);
    // para salvar o like do DEV
    await loggedDev.save();

    return res.json(loggedDev);
  }
};
