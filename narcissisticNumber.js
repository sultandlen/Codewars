function narcissistic(value) {
  let str = value.toString();
  let len = str.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += Math.pow(parseInt(str[i]), len);
  }
  return sum === value;
}
