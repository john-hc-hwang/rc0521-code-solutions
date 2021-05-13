/* exported countdown */

function countdown(number) {
  var counter = [];
  for (var i = number; i >= 0; i--) {
    counter.push(i);
  }
  return counter;
}
