const express = require('express');
const app = express();

const grades = {};
let index = 1;

app.get('/api/grades', (req, res) => {
  const tempArray = [];
  for (const id in grades) {
    tempArray.push(grades[id]);
  }
  res.json(tempArray);
});

const JSON = express.json();
app.use(JSON);

app.post('/api/grades', (req, res) => {
  grades[index] = req.body;
  grades[index].id = index;

  const currentId = index;
  index++;
  res.status(201).json(grades[currentId]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
