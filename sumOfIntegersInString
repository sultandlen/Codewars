function sumOfIntegersInString(s) {
  let sum = 0;
  let num = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      num += s[i];
    } else {
      if (num !== "") {
        sum += parseInt(num);
        num = "";
      }
    }
  }
  return sum + (num !== "" ? parseInt(num) : 0);
}

console.log(sumOfIntegersInString("12.4"));
