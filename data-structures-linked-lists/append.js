/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const node = new LinkedList(value);

  let nextList = list;
  while (nextList.next !== null) {
    nextList = nextList.next;
  }

  nextList.next = node;
  return nextList;
}
