function generateHashtag(str) {
  if (str === "") return false;
  let rs =
    "#" +
    str
      .split(" ")
      .filter((w) => w !== "")
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join("");
  if (rs.length > 140 || rs === "#") return false;
  return rs;
}
