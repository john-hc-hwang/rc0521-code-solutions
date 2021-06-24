const remove = (data, fs) => {
  const Id = process.argv[3];
  delete data.notes[Id];

  const dataJSON = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', dataJSON, 'utf8', err => {
    if (err) throw err;
  });
};

module.exports = remove;
