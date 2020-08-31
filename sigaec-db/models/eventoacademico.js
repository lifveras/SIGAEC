const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    publicacaoAcademicaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "publicacaoAcademicaId",
      references: {
        key: "publicacaoAcademicaId",
        model: "publicacaoacademica_model",
      },
    },
    inicio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "inicio",
    },
    termino: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "termino",
    },
    enderecoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "enderecoId",
      references: {
        key: "enderecoId",
        model: "endereco_model",
      },
    },
  };
  const options = {
    tableName: "eventoacademico",
    comment: "",
    indexes: [
      {
        name: "enderecoId",
        unique: false,
        type: "BTREE",
        fields: ["enderecoId"],
      },
    ],
  };
  const EventoacademicoModel = sequelize.define(
    "eventoacademico_model",
    attributes,
    options
  );
  return EventoacademicoModel;
};
