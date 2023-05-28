function dirReduc(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length > 0 && isOpposite(arr[i], stack[stack.length - 1])) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  return stack;
}

function isOpposite(dir1, dir2) {
  return (
    (dir1 === "SOUTH" && dir2 === "NORTH") ||
    (dir1 === "NORTH" && dir2 === "SOUTH") ||
    (dir1 === "EAST" && dir2 === "WEST") ||
    (dir1 === "WEST" && dir2 === "EAST")
  );
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
