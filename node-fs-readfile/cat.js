const fs = require('fs');

if (process.argv[2] !== undefined) {
  for (let i = 2; i < process.argv.length; i++) {
    const txt = process.argv[i];
    fs.readFile(txt, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
} else {
  console.log('No txt inputs');
}
