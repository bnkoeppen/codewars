function countLonelyLetters(text) {
  const ascii_a = "a".charCodeAt(0);
  const re = /[^a-zA-Z]/g;

  const filtered_text = text.replaceAll(re, "").toLowerCase();
  let char_counts = new Array(26).fill(0);
  for (let char of filtered_text) {
    char_counts[char.charCodeAt(0) - ascii_a]++;
  }

  let acc = 0;
  for (let idx = 0; idx < char_counts.length; idx++) {
    let neighbors;
    if (idx === 0) {
      neighbors = [idx + 1];
    } else if (idx === char_counts.length - 1) {
      neighbors = [idx - 1];
    } else {
      neighbors = [idx - 1, idx + 1];
    }
    acc +=
      neighbors.every((v) => char_counts[v] === 0) && char_counts[idx] === 1;
  }

  return acc;
}
