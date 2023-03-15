function findEvenIndex(arr) {
  const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
  let leftSum = (rightSum = index = 0);
  while (leftSum <= sum / 2) {
    leftSum += arr[index];
    index++;
  }

  for (let i = index - 1; i < arr.length; i++) {
    rightSum += arr[i];
  }
  if (rightSum === leftSum) {
    return index - 1;
  }
  return -1;
}
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
