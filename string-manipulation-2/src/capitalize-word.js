/* exported capitalizeWord */

function capitalizeWord(word) {
  var cap = '';
  cap = word.toLowerCase();
  if (cap === 'javascript') {
    cap = cap.charAt(0).toUpperCase() + cap.slice(1, 4) + cap.charAt(4).toUpperCase() + cap.slice(5);
  } else {
    cap = cap.charAt(0).toUpperCase() + cap.slice(1);
  }
  return cap;
}
