function duplicateEncode(word) {
  const lowercaseWord = word.toLowerCase();
  const charCounts = lowercaseWord.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const charToParen = (char) => (charCounts[char] > 1 ? ")" : "(");
  return [...lowercaseWord].map(charToParen).join("");
}
