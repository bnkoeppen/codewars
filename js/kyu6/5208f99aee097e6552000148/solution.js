function solution(string) {
  if (string == "") return "";

  const isUpper = (char) => char === char.toUpperCase();
  let rs = string[0];

  for (let idx = 1; idx < string.length; idx++) {
    isUpper(string[idx]) ? (rs += " " + string[idx]) : (rs += string[idx]);
  }
  return rs;
}
