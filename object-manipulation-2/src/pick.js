/* exported pick */

function pick(source, keys) {
  var pick = {};
  for (var x in source) {
    for (var i = 0; i < keys.length; i++) {
      if (x === keys[i]) {
        pick[x] = source[x];
      }
    }
  }

  for (var k in pick) {
    if (pick[k] === undefined) {
      delete pick[k];
    }
  }

  return pick;
}
