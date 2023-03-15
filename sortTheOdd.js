function sortArray(array) {
  let odds = [];
  array.forEach((element) => {
    if (element % 2 != 0) {
      odds.push(element);
      array[array.indexOf(element)] = "x";
    }
  });

  odds.sort((a, b) => a - b);

  array.forEach((element) => {
    if (element === "x") {
      array[array.indexOf(element)] = odds.shift();
    }
  });
  return array;
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
