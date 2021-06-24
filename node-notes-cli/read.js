const read = data => {
  let txt = '';
  for (const [key, value] of Object.entries(data.notes)) {
    txt += `${key}: ${value}` + '\n';
  }

  txt = txt.slice(0, txt.length - 1);
  console.log(txt);
};

module.exports = read;
