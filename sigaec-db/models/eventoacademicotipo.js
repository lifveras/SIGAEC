const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    eventoAcademicoTipoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "eventoAcademicoTipoId"
    },
    nome: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    }
  };
  const options = {
    tableName: "eventoacademicotipo",
    comment: "",
    indexes: []
  };
  const EventoacademicotipoModel = sequelize.define("eventoacademicotipo_model", attributes, options);
  return EventoacademicotipoModel;
};