function humanReadable(seconds) {
  const pad2 = (n) => (n < 10 ? "0" + n.toString() : n.toString());
  return `${pad2(Math.trunc(seconds / 3600))}:${pad2(Math.trunc((seconds % 3600) / 60))}:${pad2(seconds % 60)}`;
}
