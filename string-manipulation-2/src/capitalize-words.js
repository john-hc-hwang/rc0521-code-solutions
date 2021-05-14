/* exported capitalizeWords */

function capitalizeWords(string) {
  var lower = string.toLowerCase();
  var words = lower.split(' ');
  var cap = '';

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    cap += words[i] + ' ';
  }
  cap = cap.slice(0, cap.length - 1);
  return cap;
}
