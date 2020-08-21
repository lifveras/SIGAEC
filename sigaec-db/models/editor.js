const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
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
        model: "cadastro_model"
      }
    },
    parecer: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "parecer"
    }
  };
  const options = {
    tableName: "editor",
    comment: "",
    indexes: []
  };
  const EditorModel = sequelize.define("editor_model", attributes, options);
  return EditorModel;
};