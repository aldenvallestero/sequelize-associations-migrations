'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      models.Student.belongsToMany(models.Course, { through: 'StudentCourse', as: 'Course' });
    }
  }
  Student.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
    createdAt: false,
    updatedAt: false,
  });
  return Student;
};
