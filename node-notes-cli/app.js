const read = require('./read');
const add = require('./add');
const update = require('./update');
const remove = require('./delete');

const action = process.argv[2];

if (action === 'read') {
  read();
} else if (action === 'create') {
  add();
} else if (action === 'update') {
  update();
} else if (action === 'delete') {
  remove();
} else {
  console.log('Not available operation');
}
