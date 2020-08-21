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
    eventoCronogramaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "eventoCronogramaId",
      references: {
        key: "eventoCronogramaId",
        model: "eventocronograma_model"
      }
    }
  };
  const options = {
    tableName: "eventoacademicoeventocronogramarelacao",
    comment: "",
    indexes: [{
      name: "eventoCronogramaId",
      unique: false,
      type: "BTREE",
      fields: ["eventoCronogramaId"]
    }]
  };
  const EventoacademicoeventocronogramarelacaoModel = sequelize.define("eventoacademicoeventocronogramarelacao_model", attributes, options);
  return EventoacademicoeventocronogramarelacaoModel;
};