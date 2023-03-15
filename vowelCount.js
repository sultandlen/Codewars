function getCount(str) {
  let letters = ["a", "e", "i", "o", "u"];
  const arr = Array.from(str);
  let vowels = arr.filter((char) => letters.indexOf(char) > -1);
  return vowels.length;
}

console.log(getCount("abracadabra"));
