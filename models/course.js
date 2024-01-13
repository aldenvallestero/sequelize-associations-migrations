'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      this.belongsToMany(
        models.Student,
        {
          through: 'StudentCourses',
          foreignKey: 'course_id',
          as: 'students'
        }
      );
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
