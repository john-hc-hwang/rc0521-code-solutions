/* exported ransomCase */

function ransomCase(string) {
  var ransom = string.toLowerCase();
  var cap = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      cap += ransom.charAt(i).toUpperCase();
    } else {
      cap += ransom.charAt(i);
    }
  }
  return cap;
}
