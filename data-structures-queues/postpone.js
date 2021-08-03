/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    queue.enqueue(queue.dequeue());
  }
}
