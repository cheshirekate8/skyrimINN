'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Inns', [
        {
          name:'Braidwood Inn',
          location_id: '1',
          region_id: '2',
          host_id: '4',
          price: '10'
        },
        {
          name:'Candlehearth Hall',
          location_id: '2',
          region_id: '1',
          host_id: '5',
          price: '10'
        },
        {
          name:'Dead Man\'s Drink',
          location_id: '3',
          region_id: '2',
          host_id: '6',
          price: '10'
        },
        {
          name:'Four Shields Tavern',
          location_id: '4',
          region_id: '3',
          host_id: '7',
          price: '10'
        },
        {
          name:'The Winking Skeever',
          location_id: '5',
          region_id: '3',
          host_id: '8',
          price: '10'
        },
        {
          name:'Moorside Inn',
          location_id: '6',
          region_id: '4',
          host_id: '9',
          price: '10'
        },
        {
          name:'The Retching Netch',
          location_id: '7',
          region_id: '5',
          host_id: '10',
          price: '10'
        },
        {
          name:'Nightgate Inn',
          location_id: '8',
          region_id: '6',
          host_id: '11',
          price: '10'
        },
        {
          name:'Windpeak Inn',
          location_id: '9',
          region_id: '6',
          host_id: '12',
          price: '10'
        },
        {
          name:'Silver-Blood Inn',
          location_id: '10',
          region_id: '7',
          host_id: '13',
          price: '10'
        },
        {
          name:'Old Hroldan Inn',
          location_id: '11',
          region_id: '7',
          host_id: '14',
          price: '10'
        },
        {
          name:'The Bee and Barb',
          location_id: '12',
          region_id: '8',
          host_id: '15',
          price: '10'
        },
        {
          name:'Vilemyr Inn',
          location_id: '13',
          region_id: '8',
          host_id: '16',
          price: '10'
        },
        {
          name:'Frostfruit Inn',
          location_id: '14',
          region_id: '9',
          host_id: '17',
          price: '10'
        },
        {
          name:'Sleeping Giant Inn',
          location_id: '15',
          region_id: '9',
          host_id: '18',
          price: '10'
        },
        {
          name:'The Bannered Mare',
          location_id: '16',
          region_id: '9',
          host_id: '19',
          price: '10'
        },
        {
          name:'The Frozen Hearth',
          location_id: '17',
          region_id: '10',
          host_id: '20',
          price: '10'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Inns', null, {});
  }
};
