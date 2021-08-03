/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  }

  const popped = stack.pop();
  stack.push(value);
  stack.push(popped);
}
