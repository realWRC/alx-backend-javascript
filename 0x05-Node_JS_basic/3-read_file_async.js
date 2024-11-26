// A function that reads a database

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');
      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((student) => {
        // eslint-disable-next-line no-unused-vars
        const [firstname, lastname, age, field] = student.split(',');
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });
      for (const [field, names] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
        );
      }
      resolve();
    });
  });
}

module.exports = countStudents;
