const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    trabalhoAcademicoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "trabalhoAcademicoId",
      references: {
        key: "trabalhoAcademicoId",
        model: "trabalhoacademico_model"
      }
    },
    areaConhecimentoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "areaConhecimentoId",
      references: {
        key: "areaConhecimentoId",
        model: "areaconhecimento_model"
      }
    }
  };
  const options = {
    tableName: "trabalhoacademicoareaconhecimentorelacao",
    comment: "",
    indexes: [{
      name: "areaConhecimentoId",
      unique: false,
      type: "BTREE",
      fields: ["areaConhecimentoId"]
    }]
  };
  const TrabalhoacademicoareaconhecimentorelacaoModel = sequelize.define("trabalhoacademicoareaconhecimentorelacao_model", attributes, options);
  return TrabalhoacademicoareaconhecimentorelacaoModel;
};