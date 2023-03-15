function openOrSenior(data) {
  let output = [];
  for (let i of data) {
    let statue = i[0] > 54 && i[1] > 7 ? "Senior" : "Open";
    output.push(statue);
  }
  return output;
}
