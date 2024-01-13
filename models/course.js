'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      models.Course.belongsToMany(models.Student, { through: 'StudentCourse', as: 'Student' });
    }
  }
  Course.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
    createdAt: false,
    updatedAt: false,
  });
  return Course;
};
