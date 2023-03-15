function alphabetPosition(text) {
  let alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  let result = "";
  for (let letter of text) {
    if (alphabet.indexOf(letter) !== -1) {
      result += Math.ceil((alphabet.indexOf(letter) + 1) / 2) + " ";
    }
  }
  return result.trim();
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
