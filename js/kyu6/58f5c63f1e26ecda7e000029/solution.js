function wave(str) {
  if (str.trim() === "") return [];
  const letterIdxs = [...str].reduce(
    (acc, char, i) => (char === " " ? acc : acc.concat(i)),
    [],
  );
  return letterIdxs.map(
    (i) => str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1),
  );
}
