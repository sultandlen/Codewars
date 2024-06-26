function getMissingIngredients(recipe, added) {
  let missing = {};
  let count = 1;

  for (let key in recipe) {
    if (added[key] !== undefined) {
      let currentCount = Math.ceil(added[key] / recipe[key]);
      count = Math.max(count, currentCount);
    }
    2;
  }

  for (let key in recipe) {
    if (added[key] === undefined) {
      missing[key] = recipe[key] * count;
    } else {
      let diff = recipe[key] * count - added[key];
      if (diff > 0) {
        missing[key] = diff;
      }
    }
  }
  return missing;
}

let recipe = { flour: 200, eggs: 1, sugar: 100 };
console.log(getMissingIngredients(recipe, {}));
