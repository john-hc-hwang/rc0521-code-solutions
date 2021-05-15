/* exported reverseWords */

function reverseWords(string) {
  var wordArr = string.split(' ');
  var reverseArr = [];
  var reverseString = '';
  var tempString = '';
  for (var i = 0; i < wordArr.length; i++) {
    for (var j = wordArr[i].length - 1; j >= 0; j--) {
      tempString += wordArr[i][j];
    }
    reverseArr.push(tempString);
    tempString = '';
  }

  for (var x = 0; x < reverseArr.length; x++) {
    reverseString += reverseArr[x] + ' ';
  }

  reverseString = reverseString.slice(0, reverseString.length - 1);
  return reverseString;
}
