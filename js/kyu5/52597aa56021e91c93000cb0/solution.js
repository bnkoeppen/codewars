const moveZeros = (arr) =>
<<<<<<< HEAD
  arr
    .filter((v) => v !== 0)
    .concat(Array(arr.reduce((acc, v) => (acc += v === 0), 0)).fill(0));
=======
  arr.filter((v) => v !== 0).concat(arr.filter((v) => v === 0));
>>>>>>> 8cfd2dd (52597aa56021e91c93000cb0 solution)
