function solve(s) {
  let length = s.length;
  if (length % 2 !== 0) return -1;
  let stack = [];

  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }
  if (stack.length === 0) return 0;
  let reversals = 0;
  while (stack.length > 0) {
    if (stack.pop() === stack.pop()) {
      reversals += 1;
    } else {
      reversals += 2;
    }
  }
  return reversals;
}
