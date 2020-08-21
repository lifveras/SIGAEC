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
    envios_maximo: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "envios_maximo"
    }
  };
  const options = {
    tableName: "autordeevento",
    comment: "",
    indexes: []
  };
  const AutordeeventoModel = sequelize.define("autordeevento_model", attributes, options);
  return AutordeeventoModel;
};