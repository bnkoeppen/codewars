const moveZeros = (arr) =>
  arr
    .filter((v) => v !== 0)
    .concat(Array(arr.reduce((acc, v) => (acc += v === 0), 0)).fill(0));
