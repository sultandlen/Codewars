function rot13(message) {
  return message.split("").map(shift).join("");
  //return Array.from(message, (x) => shift(x)).join("");
}

function shift(letter) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let isLowerCase = letter.toLowerCase() === letter;
  letter = letter.toLowerCase();

  let index = alphabet.indexOf(letter);
  if (index === -1) return letter;
  let newletter =
    index >= 13 ? alphabet[index + 13 - 26] : alphabet[index + 13];
  return isLowerCase ? newletter : newletter.toUpperCase();
}

console.log(rot13("Y9y +V`- dg[IN"));
