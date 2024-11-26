// Express js server that interacts with a database

const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const databaseFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  fs.readFile(databaseFile, 'utf8', (err, data) => {
    if (err) {
      res.end('Cannot load the database');
    } else {
      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');
      res.write(`Number of students: ${students.length}\n`);

      const fields = {};
      students.forEach((student) => {
        const details = student.split(',');
        if (details.length === 4) {
          // eslint-disable-next-line no-unused-vars
          const [firstname, lastname, age, field] = details.map((item) => item.trim());
          if (field) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        }
      });

      for (const [field, names] of Object.entries(fields)) {
        res.write(
          `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`,
        );
      }
      res.end();
    }
  });
});

app.listen(port, () => {});

module.exports = app;
