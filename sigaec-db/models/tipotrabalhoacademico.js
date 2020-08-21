const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    tipoTrabalhoAcademicoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "tipoTrabalhoAcademicoId"
    },
    nome: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    descricao: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    }
  };
  const options = {
    tableName: "tipotrabalhoacademico",
    comment: "",
    indexes: []
  };
  const TipotrabalhoacademicoModel = sequelize.define("tipotrabalhoacademico_model", attributes, options);
  return TipotrabalhoacademicoModel;
};