'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrdenCompras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaEmision: {
        type: Sequelize.DATE
      },
      Situacion: {
        type: Sequelize.STRING
      },
      Total: {
        type: Sequelize.DECIMAL
      },
      laboratorioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Laboratorios',
          key: 'id'
        }
      },
      NrofacturaProv: {
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
    await queryInterface.dropTable('OrdenCompras');
  }
};