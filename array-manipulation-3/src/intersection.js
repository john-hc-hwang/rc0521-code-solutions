/* exported intersection */

function intersection(first, second) {
  var firstArr = first;
  var secondArr = second;
  var match = [];

  for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
      if (firstArr[i] === secondArr[j]) {
        match.push(firstArr[i]);
      }
    }
  }

  return match;
}
