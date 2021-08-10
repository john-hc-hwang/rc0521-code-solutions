/* exported getLength */

function getLength(list) {
  let count = 1;
  let nextList = list;
  while (nextList.next !== null) {
    nextList = nextList.next;
    count++;
  }
  return count;
}
