/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return null;
  } else {
    list.next.data = value;
  }
}
