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
    início: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "início"
    },
    término: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "término"
    },
    enderecoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "enderecoId",
      references: {
        key: "enderecoId",
        model: "endereco_model"
      }
    }
  };
  const options = {
    tableName: "eventoacademico",
    comment: "",
    indexes: [{
      name: "enderecoId",
      unique: false,
      type: "BTREE",
      fields: ["enderecoId"]
    }]
  };
  const EventoacademicoModel = sequelize.define("eventoacademico_model", attributes, options);
  return EventoacademicoModel;
};