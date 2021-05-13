/* exported drop */

function drop(array, count) {
  var drop = [];
  for (var i = count; i < array.length; i++) {
    drop.push(array[i]);
  }
  return drop;
}
