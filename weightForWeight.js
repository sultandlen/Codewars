function orderWeight(str) {
  if (str === "") return "";
  let result = [];
  let weights = str.split(" ");
  for (let val of weights) {
    result.push({
      val: val,
      sum: sumOfDigits(val),
    });
  }
  return result
    .sort(compare)
    .map((x) => x.val)
    .join(" ");
}

function compare(a, b) {
  if (a.sum !== b.sum) {
    return a.sum - b.sum;
  }
  return a.val.localeCompare(b.val);
}

function sumOfDigits(num) {
  return num.split("").reduce((acc, digit) => acc + Number(digit), 0);
}

console.log(orderWeight("100 21 25 30"));
