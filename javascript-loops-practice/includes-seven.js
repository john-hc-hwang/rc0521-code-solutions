/* exported includesSeven */

function includesSeven(array) {
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      var isTrue = true;
    } else {
      var isFalse = false;
    }
  }

  if (isTrue) {
    return isTrue;
  } else {
    return isFalse;
  }
}
