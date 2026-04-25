function ipsBetween(start, end) {
  const ip2num = (ip) =>
    ip
      .split(".")
      .map((part) => parseInt(part))
      .reduce((acc, part) => acc * 256 + part, 0);
  return ip2num(end) - ip2num(start);
}
