function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return "";
  let concated = [];
  for (let base_idx = 0; base_idx < strarr.length - (k - 1); base_idx++) {
    let c = "";
    for (let idx = base_idx; idx < base_idx + k; idx++) {
      c += strarr[idx];
    }
    concated[base_idx] = c;
  }
  return concated.reduce(
    (acc, str) => (str.length > acc.length ? str : acc),
    "",
  );
}
