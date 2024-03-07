function findEvenIndex(arr) {
  let leftSum = 0;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    let rightSum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }
    if (leftSum - arr[i] === rightSum) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
