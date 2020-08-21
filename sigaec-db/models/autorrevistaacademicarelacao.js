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
    }
  };
  const options = {
    tableName: "autorrevistaacademicarelacao",
    comment: "",
    indexes: [{
      name: "cadastroId",
      unique: false,
      type: "BTREE",
      fields: ["cadastroId"]
    }]
  };
  const AutorrevistaacademicarelacaoModel = sequelize.define("autorrevistaacademicarelacao_model", attributes, options);
  return AutorrevistaacademicarelacaoModel;
};