/* exported getTop */

function getTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }

  return stack.peek();
}
