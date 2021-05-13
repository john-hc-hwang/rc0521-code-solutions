/* exported oddOrEven */

function oddOrEven(array) {
  var oddEven = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      oddEven.push('even');
    } else {
      oddEven.push('odd');
    }
  }
  return oddEven;
}
