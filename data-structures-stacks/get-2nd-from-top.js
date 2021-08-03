/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }

  const popped = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(popped);
    return undefined;
  }

  const second = stack.peek();
  stack.push(popped);
  return second;
}
