const model = require("../models");

const EventoAcademico = model.eventoacademicoModel;
const PublicacaoAcademica = model.publicacaoacademicaModel;

//Definindo as relações entre os Models
PublicacaoAcademica.hasMany(EventoAcademico, {
  foreignKey: "publicacaoAcademicaId",
});
EventoAcademico.belongsTo(PublicacaoAcademica, {
  foreignKey: "publicacaoAcademicaId",
});

const create = (request, response) => {
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

      let dataResponse = { ...object.dataValues };

      EventoAcademico.create(eaData)
        .then((object) => {
          let result = object.dataValues;
          delete result.publicacaoAcademicaId;
          dataResponse = { ...dataResponse, ...result };
          response.status(200).send(dataResponse);
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
    attributes: [
      "publicacaoAcademicaId",
      "inicio",
      "termino",
      "publicacaoacademicaModel.nome",
      "publicacaoacademicaModel.descricao",
    ],
    raw: true,
    include: [
      {
        model: PublicacaoAcademica,
        required: true,
        attributes: [],
      },
    ],
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
  const paData = {
    nome: request.body.nome,
    descricao: request.body.descricao,
  };
  PublicacaoAcademica.update(paData, {
    raw: true,
    where: { publicacaoAcademicaId: request.params.id },
  })
    .then((object) => {
      const eaData = {
        publicacaoAcademicaId: request.params.id,
        inicio: request.body.inicio,
        termino: request.body.termino,
      };

      EventoAcademico.update(eaData, {
        where: { publicacaoAcademicaId: eaData.publicacaoAcademicaId },
        raw: true,
      })
        .then((object) => {
          response
            .status(200)
            .send("Evento de id = " + request.params.id + " Atualizado!");
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

const deleteById = (request, response) => {
  EventoAcademico.destroy({
    where: { publicacaoacademicaId: request.params.id },
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
