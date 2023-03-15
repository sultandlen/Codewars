function moveZeros(arr) {
  const zeros = arr.filter((num) => num === 0);
  let others = arr.filter((num) => num !== 0);
  return others.concat(zeros);
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
