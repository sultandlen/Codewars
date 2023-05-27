function firstNonRepeatingLetter(str) {
  let loweredStr = str.toLowerCase();
  let splitted = loweredStr.split("");
  for (let i = 0; i < splitted.length; i++) {
    if (splitted.indexOf(splitted[i]) === splitted.lastIndexOf(splitted[i]))
      return str[i];
  }
  return None;
}

console.log(firstNonRepeatingLetter("moonMan"));
