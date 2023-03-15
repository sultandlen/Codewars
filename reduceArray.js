function setReducer(input) {
  let output = input;
  while (output.length != 1) {
    output = reduceOnce(output);
  }
  return output;
}

function reduceOnce(input) {
  let output = [1];
  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      output[output.length - 1]++;
    } else {
      output.push(1);
    }
  }
  return output;
}

console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]));
