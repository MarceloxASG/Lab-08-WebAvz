'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Laboratorios', [
      {
        razonSocial: 'Laboratorio A',
        direccion: 'Calle 123',
        telefono: '123456789',
        email: 'info@laboratorioA.com',
        contacto: 'Marcelo Sanabria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        razonSocial: 'Laboratorio B',
        direccion: 'Av. Principal 456',
        telefono: '987654321',
        email: 'info@laboratorioB.com',
        contacto: 'Alonso Gavilan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Laboratorios', null, {});
  },
};
