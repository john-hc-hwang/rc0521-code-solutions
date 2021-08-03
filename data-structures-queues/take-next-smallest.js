/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }

  let firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  }

  let secondValue = queue.peek();
  while (firstValue > secondValue) {
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
    secondValue = queue.peek();
  }

  return firstValue;
}
