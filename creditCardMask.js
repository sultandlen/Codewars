// return masked string
function maskify(cc) {
  if (cc.length < 5) {
    return cc;
  } else {
    return "#".repeat(cc.length - 4) + cc.substring(cc.length - 4);
  }
}

console.log(maskify("Barış kalp sultan lucu"));
