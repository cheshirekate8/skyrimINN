'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Regions', [
      { name: 'Eastmarch' },      //1
      { name: 'Falkreath Hold' }, //2
      { name: 'Haafingar' },      //3
      { name: 'Hjaalmarch' },     //4
      { name: 'Solstheim' },      //5
      { name: 'The Pale' },       //6
      { name: 'The Reach' },      //7
      { name: 'The Rift' },       //8
      { name: 'Whiterun Hold' },  //9
      { name: 'Winterhold' }      //10
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Regions', null, {});
  }
};
