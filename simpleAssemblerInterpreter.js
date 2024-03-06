function simple_assembler(program) {
  result = {};
  for (let i = 0; i < program.length; i++) {
    let inst = program[i].split(" ");
    if (inst[0] === "mov") {
      result[inst[1]] = isNaN(inst[2]) ? result[inst[2]] : parseInt(inst[2]);
    } else if (inst[0] === "jnz") {
      if (result[inst[1]] !== 0) {
        i += parseInt(inst[2]) - 1;
      }
    } else if (inst[0] === "inc") {
      result[inst[1]] += 1;
    } else if (inst[0] === "dec") {
      result[inst[1]] -= 1;
    }
  }
  return result;
}

console.log(
  simple_assembler(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"])
);
