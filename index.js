const { Student } = require('./models/index');

console.log('Connecting to database ...');

setTimeout(async () => {
  const students = await Student.findOne({
    where: {
      id: 1,
    },
    include: 'courses',
  });

  console.log(students.dataValues.courses[0].dataValues);
}, 2000);
