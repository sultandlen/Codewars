function findUniq(arr) {
  let arr1 = [arr[0]];
  let arr2 = [];
  for (let i = 1; i < arr.length; i++) {
    arr[i] === arr1[0] ? arr1.push(arr[i]) : arr2.push(arr[i]);
    if (arr1.length >= 2 && arr2.length == 1) return arr2[0];
    if (arr2.length >= 2 && arr1.length == 1) return arr1[0];
  }
}

console.log(findUniq([3, 10, 3, 3, 3]));
