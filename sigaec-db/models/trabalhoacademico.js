const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    trabalhoAcademicoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "trabalhoAcademicoId",
    },
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
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "titulo",
    },
    resumo: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "resumo",
    },
    palavrastrabalhoacademicochave: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "palavrastrabalhoacademicochave",
    },
    arquivo: {
      type: DataTypes.BLOB,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "arquivo",
    },
    dataSubmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dataSubmissao",
    },
    autorPrincipalId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "autorPrincipalId",
      references: {
        key: "cadastroId",
        model: "autor_model",
      },
    },
    tipoTrabalhoAcademicoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tipoTrabalhoAcademicoId",
      references: {
        key: "tipoTrabalhoAcademicoId",
        model: "tipotrabalhoacademico_model",
      },
    },
    statusRevisaoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "statusRevisaoId",
      references: {
        key: "statusRevisaoId",
        model: "statusrevisao_model",
      },
    },
    areaConhecimentoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "areaConhecimentoId",
      references: {
        key: "areaConhecimentoId",
        model: "areaconhecimento_model",
      },
    },
  };
  const options = {
    tableName: "trabalhoacademico",
    comment: "",
    indexes: [
      {
        name: "publicacaoAcademicaId",
        unique: false,
        type: "BTREE",
        fields: ["publicacaoAcademicaId"],
      },
      {
        name: "tipoTrabalhoAcademicoId",
        unique: false,
        type: "BTREE",
        fields: ["tipoTrabalhoAcademicoId"],
      },
      {
        name: "statusRevisaoId",
        unique: false,
        type: "BTREE",
        fields: ["statusRevisaoId"],
      },
      {
        name: "areaConhecimentoId",
        unique: false,
        type: "BTREE",
        fields: ["areaConhecimentoId"],
      },
      {
        name: "autorPrincipalId",
        unique: false,
        type: "BTREE",
        fields: ["autorPrincipalId"],
      },
    ],
  };
  const TrabalhoacademicoModel = sequelize.define(
    "trabalhoacademico_model",
    attributes,
    options
  );
  return TrabalhoacademicoModel;
};
