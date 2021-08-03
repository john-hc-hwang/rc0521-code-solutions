/* exported takeTop */

function takeTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }

  return stack.pop();
}
