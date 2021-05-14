/* exported equal */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  var count = 0;
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      count++;
    }
  }

  if (count === first.length) {
    return true;
  }

  return false;
}
