const data = require('./data.json');
const fs = require('fs');

const read = require('./read');
const add = require('./add');
const update = require('./update');
const remove = require('./delete');

const action = process.argv[2];

// depending on the action, run appropriate functions
if (action === 'read') {
  read(data, fs);
} else if (action === 'create') {
  add(data, fs);
} else if (action === 'update') {
  update(data, fs);
} else if (action === 'delete') {
  remove(data, fs);
} else {
  console.log('Not available operation');
}
