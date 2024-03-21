function getPINs(observed) {
  let adjacent = {
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 5, 7],
    5: [2, 4, 5, 6, 8],
    6: [3, 5, 6, 9],
    7: [4, 7, 8],
    8: [5, 7, 8, 9, 0],
    9: [6, 8, 9],
    0: [0, 8],
  };

  let result = [];
  result = cartesianProduct(observed.split("").map((x) => adjacent[x]));
  return result.map((x) => x.join(""));
}

function cartesianProduct(arrays) {
  if (!arrays || !arrays.length) {
    return [[]];
  }

  function cartesianHelper(arrays, index) {
    if (index === arrays.length - 1) {
      return arrays[index].map(function (item) {
        return [item];
      });
    }

    var results = [];
    var subarrays = cartesianHelper(arrays, index + 1);

    arrays[index].forEach(function (item) {
      subarrays.forEach(function (subarray) {
        results.push([item].concat(subarray));
      });
    });

    return results;
  }

  return cartesianHelper(arrays, 0);
}
console.log(getPINs("145"));
