const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    statusRevisaoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "statusRevisaoId"
    },
    nome: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    }
  };
  const options = {
    tableName: "statusrevisao",
    comment: "",
    indexes: []
  };
  const StatusrevisaoModel = sequelize.define("statusrevisao_model", attributes, options);
  return StatusrevisaoModel;
};