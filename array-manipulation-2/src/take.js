/* exported take */

function take(array, count) {
  if (array.length === 0) {
    return [];
  }
  var take = [];
  for (var i = 0; i < count; i++) {
    take.push(array[i]);
  }
  return take;
}
