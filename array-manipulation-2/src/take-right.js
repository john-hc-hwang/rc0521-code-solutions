/* exported takeRight */

function takeRight(array, count) {
  if (array.length === 0) {
    return [];
  }

  var right = [];
  for (var i = array.length - count; i < array.length; i++) {
    right.push(array[i]);
  }
  return right;
}
