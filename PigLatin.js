function pigIt(str) {
  let arr = str.split(" ");
  let newStr = "";
  arr.forEach((element) => {
    newStr += element.slice(1) + element[0] + "ay ";
  });
  return newStr;
}

console.log(pigIt("Pig latin is cool"));
