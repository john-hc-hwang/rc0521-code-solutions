/* exported getIndexes */

function getIndexes(array) {
  var index = [];
  for (var i = 0; i < array.length; i++) {
    index.push(array.indexOf(array[i]));
  }
  return index;
}
