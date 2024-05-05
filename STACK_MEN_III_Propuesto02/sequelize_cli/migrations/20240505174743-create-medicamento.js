'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medicamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcionMed: {
        type: Sequelize.STRING
      },
      fechaFabri: {
        type: Sequelize.DATE
      },
      fechaVenc: {
        type: Sequelize.DATE
      },
      Presentacion: {
        type: Sequelize.STRING
      },
      Stock: {
        type: Sequelize.INTEGER
      },
      precioVentUni: {
        type: Sequelize.DECIMAL
      },
      precioVentaPres: {
        type: Sequelize.DECIMAL
      },
      Marca: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Medicamentos');
  }
};