'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      this.belongsToMany(
        models.Course,
        {
          through: models.StudentCourse,
          foreignKey: 'student_id',
          as: 'courses',
        }
      );
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
