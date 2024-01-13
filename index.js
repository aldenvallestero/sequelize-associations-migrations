const { Student } = require('./models/index');

console.log('Connecting to database ...');

setTimeout(async () => {
  const students = await Student.findOne({
    raw: true,
    where: {
      id: 1,
    },
    include: 'courses',
  });
  console.log(students);
}, 5000);
