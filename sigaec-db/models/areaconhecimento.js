const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    areaConhecimentoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "areaConhecimentoId"
    },
    nome: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    descricao: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    }
  };
  const options = {
    tableName: "areaconhecimento",
    comment: "",
    indexes: []
  };
  const AreaconhecimentoModel = sequelize.define("areaconhecimento_model", attributes, options);
  return AreaconhecimentoModel;
};