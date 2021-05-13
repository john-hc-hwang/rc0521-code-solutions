/* exported capitalize */

function capitalize(word) {
  var capitalize = word.charAt(0).toUpperCase() + word.slice(1);
  for (var i = 1; i < word.length; i++) {
    if (word.charAt(i) === word.charAt(i).toUpperCase()) {
      capitalize = capitalize.slice(0, i) + capitalize.charAt(i).toLowerCase() + capitalize.slice(i + 1);
    }
  }

  return capitalize;
}
