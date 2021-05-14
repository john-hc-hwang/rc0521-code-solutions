/* exported invert */

function invert(source) {
  var invert = {};
  for (var x in source) {
    invert[source[x]] = x;
  }
  return invert;
}
