/* exported isVowel */

function isVowel(character) {
  var vowels = ['e', 'i', 'o', 'u', 'a', 'E', 'I', 'O', 'U', 'A'];
  for (var i = 0; i < vowels.length; i++) {
    if (character === vowels[i]) {
      return true;
    }
  }
  return false;
}
