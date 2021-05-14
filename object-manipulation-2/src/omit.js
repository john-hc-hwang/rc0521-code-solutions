/* exported omit */

function omit(source, keys) {
  if (Object.keys(source).length === 0) {
    return {};
  }

  var pick = {};
  for (var x in source) {
    pick[x] = source[x];
  }

  for (var k in pick) {
    for (var i = 0; i < keys.length; i++) {
      if (k === keys[i]) {
        delete pick[k];
      }
    }
  }

  return pick;
}
