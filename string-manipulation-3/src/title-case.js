/* exported titleCase */

function titleCase(title) {
  var lower = title.toLowerCase();
  var lowerArr = lower.split(' ');
  var finalArr = [];
  var finalString = '';
  for (var i = 0; i < lowerArr.length; i++) {
    if (lowerArr[i] === 'in' || lowerArr[i] === 'for' || lowerArr[i] === 'of' || lowerArr[i] === 'the') {
      finalArr.push(lowerArr[i]);
    } else {
      finalArr.push(lowerArr[i][0].toUpperCase() + lowerArr[i].slice(1));
    }
  }

  for (var j = 0; j < lowerArr.length; j++) {
    if (lowerArr[j] === 'javascript' || lowerArr[j] === 'javascript:') {
      finalArr[j] = (lowerArr[j][0].toUpperCase() + lowerArr[j].slice(1, 4) + lowerArr[j][4].toUpperCase() +
        lowerArr[j].slice(5));
    }
  }

  for (var x = 0; x < lowerArr.length; x++) {
    if (lowerArr[x] === 'api') {
      finalArr[x] = lowerArr[x].toUpperCase();
    }
  }

  for (var y = 0; y < lowerArr.length; y++) {
    for (var z = 0; z < lowerArr[y].length; z++) {
      if (lowerArr[y][z] === '-') {
        finalArr[y] = lowerArr[y][0].toUpperCase() + lowerArr[y].slice(1, z) + '-' + lowerArr[y][z + 1].toUpperCase() +
          lowerArr[y].slice(z + 2);
      }
    }
  }

  for (var t = 0; t < finalArr.length; t++) {
    if (finalArr[t] === 'JavaScript:') {
      finalArr[t + 1] = finalArr[t + 1][0].toUpperCase() + finalArr[t + 1].slice(1);
    }
  }

  for (var a = 0; a < finalArr.length; a++) {
    finalString += finalArr[a] + ' ';
  }

  finalString = finalString.slice(0, finalString.length - 1);
  return finalString;
}
