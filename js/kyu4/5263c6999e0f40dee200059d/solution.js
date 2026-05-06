function getPINs(observed) {
  const mappings = {
    0: [0, 8],
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 5, 7],
    5: [2, 4, 5, 6, 8],
    6: [3, 5, 6, 9],
    7: [4, 7, 8],
    8: [5, 7, 8, 9, 0],
    9: [6, 8, 9],
  };
  const zipStrs = (i1, i2) =>
    i1.map((s1) => i2.map((s2) => String(s1) + String(s2))).flat();
  return [...observed].reduce((acc, v) => zipStrs(acc, mappings[v]), [""]);
}
