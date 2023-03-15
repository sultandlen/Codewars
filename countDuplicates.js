function duplicateCount(text) {
  let arr = text.toLowerCase().split("");
  let arr2 = arr.filter((char) => arr.indexOf(char) !== arr.lastIndexOf(char));
  let set = new Set([...arr2]);
  let newArr = [...set];
  return newArr.length;
}

console.log(duplicateCount("Indivisibilities"));
