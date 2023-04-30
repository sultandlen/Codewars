function longestSubstring(str) {
  let currentStr = "";
  let length = 0;
  let pos;
  for (let i = 0; i < str.length; i++) {
    pos = currentStr.indexOf(str[i]);
    if (pos !== -1) {
      currentStr = currentStr.substring(pos + 1);
    }
    currentStr += str[i];
    length = Math.max(length, currentStr.length);
  }
  return length;
}

console.log(longestSubstring("dvdfhsdgr"));
