function trailingZeroes(n) {
  let result = 0;
  let zeros = 0;
  while (n > 4) {
    result = parseInt(n / 5);
    zeros += result;
    n = result;
  }
  return zeros;
}
