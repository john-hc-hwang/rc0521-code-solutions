/* exported truncate */

function truncate(length, string) {
  if (string.length < length) {
    return string + '...';
  }
  return string.slice(0, length) + '...';
}
