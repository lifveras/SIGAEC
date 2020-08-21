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
        model: "revistaacademica_model"
      }
    },
    cadastroId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "cadastroId",
      references: {
        key: "cadastroId",
        model: "editordearea_model"
      }
    }
  };
  const options = {
    tableName: "revistaacademicaeditordearearelacao",
    comment: "",
    indexes: [{
      name: "cadastroId",
      unique: false,
      type: "BTREE",
      fields: ["cadastroId"]
    }]
  };
  const RevistaacademicaeditordearearelacaoModel = sequelize.define("revistaacademicaeditordearearelacao_model", attributes, options);
  return RevistaacademicaeditordearearelacaoModel;
};