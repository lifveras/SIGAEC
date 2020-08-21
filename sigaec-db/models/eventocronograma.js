const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    eventoCronogramaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "eventoCronogramaId"
    },
    nome: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    descricao: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    },
    inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "inicio"
    },
    termino: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "termino"
    }
  };
  const options = {
    tableName: "eventocronograma",
    comment: "",
    indexes: []
  };
  const EventocronogramaModel = sequelize.define("eventocronograma_model", attributes, options);
  return EventocronogramaModel;
};