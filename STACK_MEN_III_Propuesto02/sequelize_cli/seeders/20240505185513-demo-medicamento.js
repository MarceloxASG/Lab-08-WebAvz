'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Medicamentos', [
      {
        descripcionMed: 'Paracetamol',
        fechaFabri: '2023-01-15',
        fechaVenc: '2024-12-31',
        Presentacion: 'Tabletas',
        Stock: 100,
        precioVentUni: 5.45,
        precioVentaPres: 9.65,
        Marca: 'Genérico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcionMed: 'Ibuprofeno',
        fechaFabri: '2023-02-20',
        fechaVenc: '2025-06-30',
        Presentacion: 'Cápsulas',
        Stock: 50,
        precioVentUni: 7.45,
        precioVentaPres: 12.25,
        Marca: 'Marca X',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Medicamentos', null, {});
  },
};