/* exported numVowels */

function numVowels(string) {
  var count = 0;
  var vowels = ['e', 'i', 'o', 'u', 'a', 'E', 'I', 'O', 'U', 'A'];
  for (var i = 0; i < string.length; i++) {
    for (var x = 0; x < vowels.length; x++) {
      if (string[i] === vowels[x]) {
        count++;
      }
    }
  }
  return count;
}
