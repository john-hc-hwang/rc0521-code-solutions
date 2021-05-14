/* exported isPalindromic */

function isPalindromic(string) {
  var pal = '';
  var noSpace = string.split(' ');
  var noSpaceString = '';
  for (var x = 0; x < noSpace.length; x++) {
    noSpaceString += noSpace[x];
  }

  for (var i = noSpaceString.length - 1; i >= 0; i--) {
    pal += noSpaceString[i];
  }

  if (pal === noSpaceString) {
    return true;
  }

  return false;
}
