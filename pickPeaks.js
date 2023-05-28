function pickPeaks(arr) {
  let result = {
    pos: [],
    peaks: [],
  };
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      result.pos.push(i);
      result.peaks.push(arr[i]);
      i++;
    } else if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
      let first = i;
      i++;
      while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
        i++;
      }
      if (arr[i] > arr[i + 1]) {
        result.pos.push(first);
        result.peaks.push(arr[i]);
        i++;
      }
    }
  }
  return result;
}

console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1])); // {pos:[3,7], peaks:[6,3]}
