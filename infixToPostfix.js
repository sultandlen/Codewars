const operators = ["+", "-", "*", "/", "(", ")", "^"];

function isOperator(ch) {
  return operators.includes(ch);
}

function precedence(ch) {
  if (ch === "+" || ch === "-") {
    return 1;
  } else if (ch === "*" || ch === "/") {
    return 2;
  } else if (ch === "^") {
    return 3;
  } else return -1;
}

function toPostfix(infix) {
  let postfix = "";
  let stack = [];
  let splInfix = infix.split("");

  for (let i = 0; i < splInfix.length; i++) {
    let current = splInfix[i];

    if (!isOperator(current)) {
      postfix += current;
    } else if (current === "(") {
      stack.push(current);
    } else if (current === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        postfix += stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        ((current !== "^" &&
          precedence(stack[stack.length - 1]) >= precedence(current)) ||
          (current === "^" &&
            precedence(stack[stack.length - 1]) > precedence(current)))
      ) {
        postfix += stack.pop();
      }
      stack.push(current);
    }
  }

  while (stack.length) {
    postfix += stack.pop();
  }

  return postfix;
}

console.log("(5-4-1)+9/5/2-7/1/7");
console.log("54-1-95/2/+71/7/-");
console.log(toPostfix("(5-4-1)+9/5/2-7/1/7")); // Should return "54-1-95/2/+71/7/-"
