const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    publicacaoAcademicaId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "publicacaoAcademicaId",
      references: {
        key: "publicacaoAcademicaId",
        model: "publicacaoacademica_model"
      }
    },
    editorChefeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "editorChefeId",
      references: {
        key: "cadastroId",
        model: "editor_model"
      }
    }
  };
  const options = {
    tableName: "revistaacademica",
    comment: "",
    indexes: [{
      name: "publicacaoAcademicaId",
      unique: false,
      type: "BTREE",
      fields: ["publicacaoAcademicaId"]
    }, {
      name: "editorChefeId",
      unique: false,
      type: "BTREE",
      fields: ["editorChefeId"]
    }]
  };
  const RevistaacademicaModel = sequelize.define("revistaacademica_model", attributes, options);
  return RevistaacademicaModel;
};