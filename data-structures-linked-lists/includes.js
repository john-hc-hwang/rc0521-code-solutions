/* exported includes */

function includes(list, value) {
  let nextList = list;
  while (nextList !== null) {
    if (nextList.data === value) {
      return true;
    }
    nextList = nextList.next;
  }
  return false;
}
