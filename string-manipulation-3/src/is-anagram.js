/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var firstArr = [];
  var secondArr = [];

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstArr.push(firstString[i]);
    }
  }

  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      secondArr.push(secondString[j]);
    }
  }

  firstArr.sort();
  secondArr.sort();
  var count = 0;

  for (var x = 0; x < firstArr.length; x++) {
    if (firstArr[x] === secondArr[x]) {
      count++;
    }
  }

  if (count === firstArr.length) {
    return true;
  }

  return false;
}
