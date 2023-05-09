function cakes(recipe, available) {
  let arr = [];
  for (let key in recipe) {
    if (available[key] == undefined) {
      return 0;
    }
    arr.push(parseInt(available[key] / recipe[key]));
  }
  return arr.sort()[0];
}

let recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
let available = { apples: 6, oil: 200, sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available));
