function largest(n, array) {
  array.sort((a, b) => b - a);
  return array.slice(0, n).reverse();
}

console.log(largest(3, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
