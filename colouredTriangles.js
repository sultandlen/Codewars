function triangle(row) {
  if (row.length === 1) {
    return row;
  }
  while (row.length > 1) {
    row = nextRow(row);
  }
  return row;
}

function nextRow(row) {
  let next = "";
  for (let i = 0; i < row.length - 1; i++) {
    next = next.concat(findColor(row[i], row[i + 1]));
  }
  return next;
}

function findColor(ch1, ch2) {
  if (ch1 === ch2) {
    return ch1;
  }
  if ((ch1 === "R") & (ch2 === "G") || (ch1 === "G") & (ch2 === "R")) {
    return "B";
  }
  if ((ch1 === "R") & (ch2 === "B") || (ch1 === "B") & (ch2 === "R")) {
    return "G";
  }
  if ((ch1 === "B") & (ch2 === "G") || (ch1 === "G") & (ch2 === "B")) {
    return "R";
  }
}
console.log(triangle("RBRGBRBGGRRRBGBBBGG"));
