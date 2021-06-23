const fs = require('fs');

const random = Math.random().toString();

fs.writeFile('random.txt', random, 'utf8', err => {
  if (err) throw err;
});
