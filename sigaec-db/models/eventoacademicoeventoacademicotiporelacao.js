const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
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
        model: "eventoacademico_model"
      }
    },
    eventoAcademicoTipoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "eventoAcademicoTipoId",
      references: {
        key: "eventoAcademicoTipoId",
        model: "eventoacademicotipo_model"
      }
    }
  };
  const options = {
    tableName: "eventoacademicoeventoacademicotiporelacao",
    comment: "",
    indexes: [{
      name: "eventoAcademicoTipoId",
      unique: false,
      type: "BTREE",
      fields: ["eventoAcademicoTipoId"]
    }]
  };
  const EventoacademicoeventoacademicotiporelacaoModel = sequelize.define("eventoacademicoeventoacademicotiporelacao_model", attributes, options);
  return EventoacademicoeventoacademicotiporelacaoModel;
};