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
    },
    comentariosRevisor: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "comentariosRevisor"
    },
    aprovaPublicacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "aprovaPublicacao"
    }
  };
  const options = {
    tableName: "revisortrabalhoacademicorelacao",
    comment: "",
    indexes: [{
      name: "trabalhoAcademicoId",
      unique: false,
      type: "BTREE",
      fields: ["trabalhoAcademicoId"]
    }]
  };
  const RevisortrabalhoacademicorelacaoModel = sequelize.define("revisortrabalhoacademicorelacao_model", attributes, options);
  return RevisortrabalhoacademicorelacaoModel;
};