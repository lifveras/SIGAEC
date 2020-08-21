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
    }
  };
  const options = {
    tableName: "autor",
    comment: "",
    indexes: [{
      name: "trabalhoAcademicoId",
      unique: false,
      type: "BTREE",
      fields: ["trabalhoAcademicoId"]
    }]
  };
  const AutorModel = sequelize.define("autor_model", attributes, options);
  return AutorModel;
};