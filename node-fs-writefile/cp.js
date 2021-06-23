const fs = require('fs');

const copyFrom = process.argv[2];
const pasteTo = process.argv[3];

fs.readFile(copyFrom, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(pasteTo, data, 'utf8', err => {
    if (err) throw err;
  });
});
