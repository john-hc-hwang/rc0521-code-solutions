/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return null;
  }

  const split = list.next.next;
  list.next = split;
}
