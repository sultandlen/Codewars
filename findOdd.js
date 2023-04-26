function findOdd(A) {
  A.sort();
  let current = A[0];
  let num = 1;
  for (let i = 1; i < A.length; i++) {
    if (A[i] === current) {
      num++;
    } else {
      if (num % 2 !== 0) {
        return current;
      }
      current = A[i];
      num = 1;
    }
  }
  return current;
}

function _findOdd(arr) {
  let newArr = [arr[0]];
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === newArr[0]) {
      newArr.pop();
    } else {
      newArr.push(arr[i]);
    }
    if (newArr.length === 2) {
      return newArr[0];
    }
  }
  return newArr[0];
}

console.log(_findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
