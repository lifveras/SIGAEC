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
        model: "publicacaoacademica_model"
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
    tableName: "publicacaoacademicoareaconhecimentorelacao",
    comment: "",
    indexes: [{
      name: "areaConhecimentoId",
      unique: false,
      type: "BTREE",
      fields: ["areaConhecimentoId"]
    }]
  };
  const PublicacaoacademicoareaconhecimentorelacaoModel = sequelize.define("publicacaoacademicoareaconhecimentorelacao_model", attributes, options);
  return PublicacaoacademicoareaconhecimentorelacaoModel;
};