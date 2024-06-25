'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('123456', 10);

    await queryInterface.bulkInsert('Users', [
      {
        email: 'user1@example.com',
        password: hashedPassword,
        birthday: new Date('1990-01-01'),
        address: '123 Street, City',
        phone: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user2@example.com',
        password: hashedPassword,
        birthday: new Date('1995-05-05'),
        address: '456 Road, Town',
        phone: '987654321',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
