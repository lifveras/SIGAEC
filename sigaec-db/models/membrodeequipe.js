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
    papelNaEquipeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "papelNaEquipeId",
      references: {
        key: "papelNaEquipeId",
        model: "papelnaequipe_model"
      }
    }
  };
  const options = {
    tableName: "membrodeequipe",
    comment: "",
    indexes: [{
      name: "papelNaEquipeId",
      unique: false,
      type: "BTREE",
      fields: ["papelNaEquipeId"]
    }]
  };
  const MembrodeequipeModel = sequelize.define("membrodeequipe_model", attributes, options);
  return MembrodeequipeModel;
};