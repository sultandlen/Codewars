function spinWords(string) {
  //TODO Have fun :)
  let newSentence = "";
  let splitted = string.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length >= 5) {
      splitted[i] = reverse(splitted[i]);
    }
    newSentence += splitted[i] + " ";
  }
  return newSentence.trim();
}

function reverse(string) {
  let newString = "";
  for (let i = string.length - 1; i > -1; i--) {
    newString += string[i];
  }
  return newString;
}

console.log(spinWords("Welcome"));
