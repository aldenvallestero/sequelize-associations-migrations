'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StudentCourses', [
      { student_id: 1, course_id: 1 },
      { student_id: 1, course_id: 2 },
      { student_id: 2, course_id: 1 },
      { student_id: 2, course_id: 3 },
    ], {});
  },

  async down (queryInterface, Sequelize) {}
};
