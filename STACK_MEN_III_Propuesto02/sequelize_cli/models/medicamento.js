'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Medicamento.init({
    descripcionMed: DataTypes.STRING,
    fechaFabri: DataTypes.DATE,
    fechaVenc: DataTypes.DATE,
    Presentacion: DataTypes.STRING,
    Stock: DataTypes.INTEGER,
    precioVentUni: DataTypes.DECIMAL,
    precioVentaPres: DataTypes.DECIMAL,
    Marca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medicamento',
  });
  return Medicamento;
};