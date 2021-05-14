/* exported zip */

function zip(first, second) {
  var minLength = first.length;
  if (first.length < second.length) {
    minLength = first.length;
  } else {
    minLength = second.length;
  }

  var tempArray = [];
  var finalArray = [];
  for (var i = 0; i < minLength; i++) {
    tempArray.push(first[i]);
    tempArray.push(second[i]);
    finalArray.push(tempArray);
    tempArray = [];
  }

  return finalArray;
}
