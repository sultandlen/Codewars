function solution(list) {
  let result = [];
  let temp = [list[0]];
  for (let i = 1; i < list.length; i++) {
    if (list[i] - temp[temp.length - 1] === 1) {
      temp.push(list[i]);
    } else {
      if (temp.length === 2) {
        result.push(temp[0]);
        result.push(temp[1]);
      } else if (temp.length > 2) {
        result.push(`${temp[0]}-${temp[temp.length - 1]}`);
      } else {
        result.push(temp[0]);
      }
      temp = [list[i]];
    }
    if (i === list.length - 1) {
      if (temp.length === 2) {
        result.push(temp[0]);
        result.push(temp[1]);
      } else if (temp.length > 2) {
        result.push(`${temp[0]}-${temp[temp.length - 1]}`);
      } else {
        result.push(temp[0]);
      }
    }
  }
  return result.join(",");
}

console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
