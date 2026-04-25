function dirReduc(arr) {
  const opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return arr.reduce(
    (prev, v) =>
      opposite[v] == prev.at(-1)
        ? prev.slice(0, prev.length - 1)
        : prev.concat(v),
    [],
  );
}
