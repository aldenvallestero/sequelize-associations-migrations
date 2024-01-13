'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      { title: 'Economics' },
      { title: 'Business' },
      { title: 'Agriculture' },
    ], {});
  },

  async down (queryInterface, Sequelize) {}
};
