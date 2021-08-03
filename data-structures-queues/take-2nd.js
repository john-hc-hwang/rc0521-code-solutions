/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }

  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  } else {
    queue.enqueue(firstValue);
    const secondValue = queue.dequeue();
    return secondValue;
  }
}
