/*function digPow(n, p) {
  let sum = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    sum += Math.pow(n[i], p++);
  }
  console.log(sum, n);
  return sum % n === 0 ? sum / n : -1;
}*/

function digPow(n, p) {
  let sum = 0;
  let arr = n.toString().split("");
  arr.forEach((element) => (sum += Math.pow(element, p++)));
  console.log(sum);
  return sum % n === 0 ? sum / n : -1;
}
console.log(digPow(89, 1));
