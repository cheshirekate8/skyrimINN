'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservations', [
      {
        user_id: 4,
        inn_id: 10,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //1
      {
        user_id: 5,
        inn_id: 10,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //2
      {
        user_id: 6,
        inn_id: 10,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //3
      {
        user_id: 7,
        inn_id: 7,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //4
      {
        user_id: 8,
        inn_id: 7,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //5
      {
        user_id: 9,
        inn_id: 7,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //6
      {
        user_id: 10,
        inn_id: 12,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //7
      {
        user_id: 11,
        inn_id: 12,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //8
      {
        user_id: 12,
        inn_id: 12,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //9
      {
        user_id: 13,
        inn_id: 2,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //10
      {
        user_id: 14,
        inn_id: 2,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //11
      {
        user_id: 15,
        inn_id: 2,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //12
      {
        user_id: 16,
        inn_id: 16,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //13
      {
        user_id: 17,
        inn_id: 16,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //14
      {
        user_id: 18,
        inn_id: 16,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 10
      }, //15
      {
        user_id: 1,
        inn_id: 16,
        start_date: '2021-09-05',
        end_date: '2021-09-07',
        price: 20
      }, //15
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});
  }
};
