/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return null;
  }

  let nextList = list;
  while (nextList.next.next !== null) {
    nextList = nextList.next;
  }

  nextList.next = null;
  return nextList;
}
