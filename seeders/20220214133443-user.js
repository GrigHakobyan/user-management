'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      username: 'user1',
      password: 'user1',
      email: 'user1@test.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        username: 'user2',
        password: 'user2',
        email: 'user2@test.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user3',
        password: 'user3',
        email: 'user3@test.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
