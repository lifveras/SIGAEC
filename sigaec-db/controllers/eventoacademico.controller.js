const models = require("../models");
const EventoAcademico = models.eventoacademico_model;
const PublicacaoAcademica = models.publicacaoacademica_model;

//Cria um novo evento academico
const create = (request, response) => {
  //let data = request.body;
  //   if(!Object.hasAttribute('endereco', data)){
  //     data.endereco = {

  //     }
  //   }
  //Recorte dos dados para a criação de Publicação Acadêmica
  const paData = {
    nome: request.body.nome,
    descricao: request.body.descricao,
  };

  PublicacaoAcademica.create(paData)
    .then((object) => {
      const eaData = {
        publicacaoAcademicaId: object.dataValues.publicacaoAcademicaId,
        inicio: request.body.inicio,
        termino: request.body.termino,
      };

      EventoAcademico.create(eaData)
        .then((object) => {
          response.status(200).send(object.DataValues);
        })
        .catch((error) => {
          console.error(error);
          response.status(400).send(error);
        });
    })
    .catch((error) => {
      console.error(error);
      response.status(400).send(error);
    });
};

//Lista todos os eventos acadêmicos
const getAll = (request, response) => {
  EventoAcademico.findAll({
    raw: true,
  })
    .then((object) => {
      console.log(object);
      response.status(200);
      response.send(object);
    })
    .catch((error) => response.status(400).send(error));
};

//Seleciona um evento acadêmico por ID
const getById = (request, response) => {
  EventoAcademico.findByPk(request.params.id)
    .then((object) => {
      response.status(200).send(object.dataValues);
    })
    .catch((error) => {
      console.error(error);
      response.status(400).send(error);
    });
};

//Altera um evento acadêmico dado um ID
const alterById = (request, response) => {
  EventoAcademico.update(request.body, {
    where: { publicacaoAcademicaId: req.params.id },
  })
    .then((object) => {
      response.status(200).send(object.dataValues);
    })
    .catch((error) => response.status(400).send(error));
};

const deleteById = (request, response) => {
  EventoAcademico.destroy({
    where: { publicacaoAcademicaId: request.params.id },
  })
    .then((object) => {
      if (object === 0) {
        response
          .status(200)
          .send("Nenhum Evento Acadêmico foi encontrado para deletar!");
      } else {
        response
          .status(200)
          .send(
            "Evento academico com id = " + request.params.id + " deletado!"
          );
      }
    })
    .catch((error) => {
      console.error(error);
      response.status(400).send(error);
    });
};

module.exports = {
  create,
  getAll,
  getById,
  alterById,
  deleteById,
};
