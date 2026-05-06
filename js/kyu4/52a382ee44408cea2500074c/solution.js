function determinant(m) {
  const n = m.length;
  const transpose = (mat) =>
    mat[0].map((_, colIdx) => mat.map((row) => row[colIdx]));
  const mt = transpose(m);
  const removeAt = (arr, idx) => [...arr.slice(0, idx), ...arr.slice(idx + 1)];
  const nMinor = (mt, idx) =>
    transpose(removeAt(mt, idx).map((col) => col.slice(1)));

  if (n === 1) return m[0][0];
  if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

  return mt.reduce(
    (acc, v, idx) =>
      acc + (-2 * (idx % 2) + 1) * v[0] * determinant(nMinor(mt, idx)),
    0,
  );
}
