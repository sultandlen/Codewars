function generateHashtag(str) {
  let woSpace = str.replace(/\s/g, "");
  if (woSpace.length + 1 > 140 || woSpace.length === 0) return false;
  let arr = str.split(" ");
  arr = arr.map(
    (element) => element.charAt(0).toUpperCase() + element.slice(1)
  );
  return "#" + arr.join("");
}

console.log(generateHashtag("Do we have a hashtag?"));
