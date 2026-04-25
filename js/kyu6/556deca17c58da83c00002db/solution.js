function tribonacci(signature, n) {
  if (n < 4) return signature.slice(0, n);
  let trib = Array.from(signature);
  for (let i = 3; i < n; i++) {
    trib.push(trib.slice(i - 3, i + 1).reduce((a, v) => a + v, 0));
  }
  return trib;
}
