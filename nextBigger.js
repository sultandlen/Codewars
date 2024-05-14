function nextBigger(n) {
  console.log(n);
  let stringN = n.toString();
  let list = stringN.split("");
  let copy = list.slice();
  let sorted = copy.sort((a, b) => b - a).join("");
  if (sorted === stringN) {
    return -1;
  }
  for (let i = list.length - 1; i > 0; i--) {
    if (list[i] > list[i - 1]) {
      let min = i;
      for (let j = i + 1; j < list.length; j++) {
        if (list[j] > list[i - 1] && list[j] < list[min]) {
          min = j;
        }
      }
      let temp = list[i - 1];
      list[i - 1] = list[min];
      list[min] = temp;
      let head = list.slice(0, i);
      let tail = list.slice(i);
      let sortedTail = tail.sort((a, b) => a - b);
      let result = head.concat(sortedTail).join("");
      return parseInt(result);
    }
  }
}

console.log(nextBigger(987655557655)); // 98765555564312
