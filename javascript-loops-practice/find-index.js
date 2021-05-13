/* exported findIndex */

function findIndex(array, value) {
  var index;
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      index = i;
      break;
    }
  }

  if (index === undefined) {
    return -1;
  }

  return index;
}
