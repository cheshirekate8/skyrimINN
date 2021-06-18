'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Locations', [
        {name: 'Kynesgrove', region_id: '1'},     //1
        {name: 'Windhelm', region_id: '1'},       //2
        {name: 'Falkreath', region_id: '2'},      //3
        {name: 'Dragon Bridge', region_id: '3'},  //4
        {name: 'Solitude', region_id: '3'},       //5
        {name: 'Morthal', region_id: '4'},        //6
        {name: 'Raven Rock', region_id: '5'},     //7
        {name: 'The Pale', region_id: '6'},       //8
        {name: 'Dawnstar', region_id: '6'},       //9
        {name: 'Markarth', region_id: '7'},       //10
        {name: 'Old Hroldan', region_id: '7'},    //11
        {name: 'Riften', region_id: '8'},         //12
        {name: 'Ivarstead', region_id: '8'},      //13
        {name: 'Rorikstead', region_id: '9'},     //14
        {name: 'Riverwood', region_id: '9'},      //15
        {name: 'Whiterun', region_id: '9'},       //16
        {name: 'Winterhold', region_id: '10'}     //17
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Locations', null, {});
  }
};
