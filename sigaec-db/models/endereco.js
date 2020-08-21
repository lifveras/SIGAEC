const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    enderecoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "enderecoId"
    },
    logradouro: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "logradouro"
    },
    bairro: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bairro"
    },
    numero: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "numero"
    },
    CEP: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CEP"
    }
  };
  const options = {
    tableName: "endereco",
    comment: "",
    indexes: []
  };
  const EnderecoModel = sequelize.define("endereco_model", attributes, options);
  return EnderecoModel;
};