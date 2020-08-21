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
    }
  };
  const options = {
    tableName: "revisor",
    comment: "",
    indexes: []
  };
  const RevisorModel = sequelize.define("revisor_model", attributes, options);
  return RevisorModel;
};