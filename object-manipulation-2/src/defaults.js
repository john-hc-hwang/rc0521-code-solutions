/* exported defaults */

function defaults(target, source) {
  if (Object.keys(target).length === 0) {
    for (var x in source) {
      target[x] = source[x];
    }
  }

  var defaults = {};
  for (var y in source) {
    defaults[y] = source[y];
  }

  for (var a in target) {
    for (var b in defaults) {
      if (a === b) {
        delete defaults[b];
      }
    }
  }

  for (var c in defaults) {
    target[c] = defaults[c];
  }
}
