'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Personas', [
      {
        nomCli: 'Paloma',
        apeCli: 'Bardales Gavilan',
        dirCli: 'Comas',
        dniCli: '78080470',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Personas', null, {});
  },
};