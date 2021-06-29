const express = require('express');
const app = express();
const fs = require('fs');

const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const tempArray = [];
  for (const id in data.notes) {
    tempArray.push(data.notes[id]);
  }
  res.json(tempArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.json(data.notes[id]);
  }
});

app.use(express.json()); // for POST, PUT, PATCH

app.post('/api/notes', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    const currentId = data.nextId++;

    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        throw res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(201).json(data.notes[currentId]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete data.notes[id];

    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        throw res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    data.notes[id] = req.body;
    data.notes[id].id = id;

    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        throw res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(200).json(data.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
