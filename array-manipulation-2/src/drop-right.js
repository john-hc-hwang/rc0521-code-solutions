/* exported dropRight */

function dropRight(array, count) {
  if (array.length === 0) {
    return [];
  }

  var right = [];
  for (var i = 0; i < array.length - count; i++) {
    right.push(array[i]);
  }
  return right;
}
