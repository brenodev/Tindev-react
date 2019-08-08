// model onde será salvo desenvolvedores no banco de dados
const { Schema, model } = require("mongoose");

// estrutura da minha tabela no BD para armazenar um DEV
const DevSchema = new Schema(
  {
    // nome do dev
    name: {
      type: String,
      required: true
    },
    // usuário do github
    user: {
      type: String,
      required: true
    },
    // bio do github, descrição do usuário e não é obrigatória
    bio: String,
    avatar: {
      type: String,
      required: true
    },
    //anota informações dos devs que deram like ou dislike
    likes: [
      {
        // referenciando uma chave para o banco
        type: Schema.Types.ObjectId,
        ref: "Dev"
      }
    ],
    dislikes: [
      {
        // referenciando uma chave para o banco
        type: Schema.Types.ObjectId,
        ref: "Dev"
      }
    ]
  },
  {
    // cria uma coluna de forma automatica chamada createdAt em cada registro que eu salvar e uma outra coluna chamada updatedAt
    // createdAt: armazena de forma automatica a data de criação de um registro dentro do banco de dados
    // updatedAt: armazena a data da ultima alteração desse registro
    timestamps: true
  }
);
module.exports = model("Dev", DevSchema);
