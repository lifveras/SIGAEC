const express = require("express");
const models = require("./models");
const routes = require("./routes");

//Cria um aplicativo express
const app = express();

//Pega o model do Endereço.
//Preste atenção no nome "endereco_model". É o mesmo definido
//na criação do model no comando "sequelize.define" do arquivo
//em "./models/endereco.js"
const Endereco = models.endereco_model;

//Habilita o middleware que converte o corpo da requisição para JSON
app.use(express.json());

//Configura as rotas dentro da aplicação express.
app.use("/api", routes);

//Exemplo de POST para um endereco
app.post("/endereco", (request, response) => {
  Endereco.create(request.body)
    .then((object) => {
      response.send(object.DataValues);
    })
    .catch((error) => response.send(error));
});

//Exemplo de GET para um endereco dado um id
app.get("/endereco/:id", (request, response) => {
  Endereco.findByPk(request.params.id)
    .then((object) => {
      console.log(object);
      response.send(object.dataValues);
    })
    .catch((error) => response.send(error));
});

//Veja mais métodos do Sequelize em
//https://sequelize.org/master/manual/model-querying-finders.html

//Inicia o servidor express
//Execute o comando "node. index.js" para inicia-lo
app.listen(8080, (request, response) => {
  console.log("[sigaec-db] Estamos no ar e ao vivo!!");
});
