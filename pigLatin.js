/*function pigIt(str) {
  let arr = str.split(" ");
  let newStr = "";
  arr.forEach((element) => {
    if (!/^[a-zA-Z]/.test(element)) {
      newStr += element;
    } else {
      newStr += element.slice(1) + element[0] + "ay ";
    }
  });
  return newStr;
}*/

function pigIt(str) {
  let arr = str.split(" ");
  return arr.reduce((acc, element) => {
    if (!/^[a-zA-Z]/.test(element)) {
      return acc + element;
    } else {
      return acc + (element.slice(1) + element[0] + "ay ");
    }
  }, "");
}

console.log(pigIt("Pig latin is cool ?"));
