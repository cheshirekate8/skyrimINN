'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Locations', [
        {name: 'Kynesgrove', region_Id: '1'},     //1
        {name: 'Windhelm', region_Id: '1'},       //2
        {name: 'Falkreath', region_Id: '2'},      //3
        {name: 'Dragon Bridge', region_Id: '3'},  //4
        {name: 'Solitude', region_Id: '3'},       //5
        {name: 'Morthal', region_Id: '4'},        //6
        {name: 'Raven Rock', region_Id: '5'},     //7
        {name: 'The Pale', region_Id: '6'},       //8
        {name: 'Dawnstar', region_Id: '6'},       //9
        {name: 'Markarth', region_Id: '7'},       //10
        {name: 'Old Hroldan', region_Id: '7'},    //11
        {name: 'Riften', region_Id: '8'},         //12
        {name: 'Ivarstead', region_Id: '8'},      //13
        {name: 'Rorikstead', region_Id: '9'},     //14
        {name: 'Riverwood', region_Id: '9'},      //15
        {name: 'Whiterun', region_Id: '9'},       //16
        {name: 'Winterhold', region_Id: '10'}     //17
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Locations', null, {});
  }
};
