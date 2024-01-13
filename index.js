const { Student } = require('./models/index');

console.log('Connecting to database ...');

setTimeout(async () => {

  /**
   * Query: Many to Many
   */

  const students = await Student.findOne({
    where: {
      id: 1,
    },
    include: 'courses',
  });

  console.log(students.dataValues.courses[0].dataValues);

  /**
   * Create: Many to Many
   */

  await Student.create({
    name: 'Coco',
    courses: [{
      title: 'Finance',
    }],
  }, {
    include: 'courses',
  });
}, 2000);
