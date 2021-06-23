const fs = require('fs');

const txt = process.argv[2];

fs.writeFile('note.txt', txt, 'utf8', err => {
  if (err) throw err;
});
