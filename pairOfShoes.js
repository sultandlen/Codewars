function pairOfShoes(shoes) {
  const right = shoes.filter((shoe) => shoe[0] === 0);
  const left = shoes.filter((shoe) => shoe[0] === 1);
  return !shoes.length % 2 ? false : true;
}

console.log(
  pairOfShoes([
    [0, 20],
    [0, 21],
    [1, 19],
    [1, 22],
  ])
);
