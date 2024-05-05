'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DetalleOrdenCompras', [
      {
        NroOrdenC: 1, 
        CodMedicamento: 1, 
        descripcion: 'Descripción del primer detalle bla bla',
        cantidad: 10,
        precio: 5.45,
        montoUni: 59.90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        NroOrdenC: 2, 
        CodMedicamento: 2, 
        descripcion: 'Descripción del segundo detalle bla bla',
        cantidad: 5,
        precio: 7.45,
        montoUni: 37.45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DetalleOrdenCompras', null, {});
  },
};
