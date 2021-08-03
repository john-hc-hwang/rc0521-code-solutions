/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }

  let max = -Infinity;

  while (stack.peek() !== undefined) {
    const popped = stack.pop();
    if (popped > max) {
      max = popped;
    }
  }

  return max;
}
