/* exported chunk */

function chunk(array, size) {
  var chunk = [];
  for (var i = 0; i < array.length; i += size) {
    chunk.push(array.slice(i, i + size));
  }
  return chunk;
}
