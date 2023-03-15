function findMissingLetter(array) {
  let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  let index = letters.indexOf(array[0]);
  for (let i = 1; i < array.length; i++) {
    index += 2;
    if (array[i] !== letters[index]) return letters[index];
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
