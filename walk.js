function isValidWalk(walk) {
  let w = (e = s = n = 0);
  if (walk.length != 10) {
    return false;
  }
  for (let letter of walk) {
    if (letter === "w") {
      w++;
    } else if (letter === "e") {
      e++;
    } else if (letter === "s") {
      s++;
    } else {
      n++;
    }
  }
  return w == e && s == n;
}

console.log(isValidWalk(["w", "w", "s", "s", "e", "e", "n", "n"]));
