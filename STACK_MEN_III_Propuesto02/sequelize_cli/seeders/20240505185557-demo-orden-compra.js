'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrdenCompras', [
      {
        fechaEmision: new Date('2024-05-05'),
        Situacion: 'En proceso',
        Total: 100.00,
        laboratorioId: 1, // ID de un laboratorio existente
        NrofacturaProv: 'FAC123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaEmision: new Date('2024-05-06'),
        Situacion: 'Completada',
        Total: 200.00,
        laboratorioId: 2, // ID de otro laboratorio existente
        NrofacturaProv: 'FAC456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrdenCompras', null, {});
  },
};
