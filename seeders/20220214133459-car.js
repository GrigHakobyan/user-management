'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Cars', [{
        name: 'car 1',
        model: 'model 1',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'car 2',
        model: 'model 2',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'car 3',
        model: 'model 3',
        userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Cars', null, {});
  }
};
