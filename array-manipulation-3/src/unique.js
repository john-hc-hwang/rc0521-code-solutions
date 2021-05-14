/* exported unique */

function unique(array) {
  if (array.length === 0) {
    return [];
  }

  var unique = [...new Set(array)];
  return unique;
}
