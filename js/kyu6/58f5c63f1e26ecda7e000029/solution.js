function wave(str) {
  return str.trim() === ""
    ? []
    : [...str]
        .reduce((acc, char, i) => (char === " " ? acc : acc.concat(i)), [])
        .map((i) => str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
}
