decodeMorse = function (morseCode) {
  // Your code here
  // You can use MORSE_CODE[morse]
  let morseCode = morseCode.trim();
  let words = morseCode.split("   ");
  let decoded = "";
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split(" ");
    for (let j = 0; j < letters.length; j++) {
      decoded += MORSE_CODE[letters[j]];
    }
    decoded += " ";
  }
  return decoded.trim();
};
