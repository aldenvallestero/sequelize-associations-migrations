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
  
  /**
   * Create: Many to Many (Use Existing Foreign Key)
   */

  await Student.create({
    name: 'Coco',
    courseId: 1
  });
}, 2000);
