/* exported difference */

function difference(first, second) {
  var firstArr = first;
  var secondArr = second;
  var match = [];
  var index;

  for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
      if (firstArr[i] === secondArr[j]) {
        match.push(firstArr[i]);
      }
    }
  }

  for (var k = 0; k < match.length; k++) {
    index = firstArr.indexOf(match[k]);
    firstArr.splice(index, 1);
    index = secondArr.indexOf(match[k]);
    secondArr.splice(index, 1);
  }

  for (var x = 0; x < secondArr.length; x++) {
    firstArr.push(secondArr[x]);
  }

  return firstArr;
}
