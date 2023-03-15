function countPositivesSumNegatives(input) {
  let count = (sum = 0);
  if (input === null || input.length === 0) {
    return [];
  }
  for (let num of input) {
    num > 0 ? count++ : (sum += num);
  }
  return [count, sum];
}

console.log(countPositivesSumNegatives(null));
