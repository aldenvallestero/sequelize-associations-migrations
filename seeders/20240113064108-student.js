'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
      { name: 'Alden Vallestero' },
      { name: 'Danica Mae Aplicy' },
    ], {});
  },

  async down (queryInterface, Sequelize) {}
};
