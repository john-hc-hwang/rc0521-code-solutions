/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  return string.slice(0, firstIndex) + string[secondIndex] +
    string.slice(firstIndex + 1, secondIndex) + string[firstIndex] + string.slice(secondIndex + 1);
}
