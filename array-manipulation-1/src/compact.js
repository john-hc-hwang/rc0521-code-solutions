/* exported compact */

function compact(array) {
  var compact = [];
  var compactFiltered = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === false || array[i] === null || Number.isNaN(array[i]) || array[i] === 0 ||
      array[i] === undefined || array[i] === '') {
      compactFiltered.push(array[i]);
    } else {
      compact.push(array[i]);
    }
  }
  return compact;
}
