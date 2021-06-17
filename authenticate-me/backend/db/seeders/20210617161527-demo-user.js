'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },  //1
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //2
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //3
      {
        email: faker.internet.email(),
        username: 'Iddra',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //4
      {
        email: faker.internet.email(),
        username: 'Elda-Early-Dawn',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //5
      {
        email: faker.internet.email(),
        username: 'Valga_Vinicia',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //6
      {
        email: faker.internet.email(),
        username: 'Faida',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //7
      {
        email: faker.internet.email(),
        username: 'Corpulus_Vinius',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //8
      {
        email: faker.internet.email(),
        username: 'Jonna',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //9
      {
        email: faker.internet.email(),
        username: 'Geldis_Sadri',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //10
      {
        email: faker.internet.email(),
        username: 'Hadring',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //11
      {
        email: faker.internet.email(),
        username: 'Thoring',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //12
      {
        email: faker.internet.email(),
        username: 'Kleppr',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //13
      {
        email: faker.internet.email(),
        username: 'Eydis',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //14
      {
        email: faker.internet.email(),
        username: 'Keerava',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //15
      {
        email: faker.internet.email(),
        username: 'Wilhelm',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //16
      {
        email: faker.internet.email(),
        username: 'Mralki',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //17
      {
        email: faker.internet.email(),
        username: 'Delphine',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //18
      {
        email: faker.internet.email(),
        username: 'Hulda',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //19
      {
        email: faker.internet.email(),
        username: 'Haran',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },  //20
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition','FakeUser1', 'FakeUser2', 'Iddra', 'Elda-Early-Dawn', 'Valga_Vinicia', 'Faida', 'Corpulus_Vinius','Jonna', 'Geldis_Sadri',
      'Hadring', 'Thoring', 'Kleppr', 'Eydis', 'Keerava', 'Wilhelm','Mralki', 'Delphine', 'Hulda', 'Haran' ] }
    }, {});
  }
};
