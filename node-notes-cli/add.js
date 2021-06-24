const add = (data, fs) => {
  const txt = process.argv[3];
  const Id = data.nextId;
  if (txt !== undefined) {
    data.notes[Id] = txt;
    data.nextId++;

    const dataJSON = JSON.stringify(data, null, 2);

    fs.writeFile('data.json', dataJSON, 'utf8', err => {
      if (err) throw err;
    });
  }
};

module.exports = add;
