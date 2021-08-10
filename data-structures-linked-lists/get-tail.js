/* exported getTail */

function getTail(list) {
  let nextList = list;
  let lastValue = nextList.data;
  while (nextList.next !== null) {
    nextList = nextList.next;
    lastValue = nextList.data;
  }

  return lastValue;
}
