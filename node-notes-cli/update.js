const update = () => {
  const data = require('./data.json');
  const fs = require('fs');
  const Id = process.argv[3];
  const txt = process.argv[4];
  data.notes[Id] = txt;

  const dataJSON = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', dataJSON, 'utf8', err => {
    if (err) throw err;
  });
};

module.exports = update;
