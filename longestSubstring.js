function longestSubstring(str) {
  let longest = "";
  let length = 0;
  let prevLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (!longest.includes(str[i])) {
      longest += str[i];
    } else {
      length = Math.max(longest.length, prevLength);
      prevLength = longest.length;
      longest = str[i];
    }
  }
  return length;
}

console.log(longestSubstring("sultandelen"));
