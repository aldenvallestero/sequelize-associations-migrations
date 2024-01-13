'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StudentCourse extends Model {
    static associate(models) {}
  }
  StudentCourse.init({
    student_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentCourse',
    createdAt: false,
    updatedAt: false,
  });
  return StudentCourse;
};
