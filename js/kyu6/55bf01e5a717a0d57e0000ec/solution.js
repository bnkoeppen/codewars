function persistence(num) {
  function rec(n, persistence) {
    if (n === n % 10) return persistence;

    const digits = Math.floor(Math.log10(n)) + 1;
    let product = 1;
    for (let place = 0; place < digits; place++) {
      product *= Math.floor(n / 10 ** place) % 10;
    }
    return rec(product, persistence + 1);
  }
  return rec(num, 0);
}
