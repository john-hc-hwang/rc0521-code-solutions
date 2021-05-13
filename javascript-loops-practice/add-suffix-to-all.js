/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var sfx = [];
  for (var i = 0; i < words.length; i++) {
    sfx.push(words[i] + suffix);
  }
  return sfx;
}
