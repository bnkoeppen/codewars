function solution(number) {
  if (number <= 0) return 0;
  let sumToN = (n) => (n * (n + 1)) / 2;
  let num = number - 1;
  return (
    sumToN(Math.floor(num / 3)) * 3 +
    sumToN(Math.floor(num / 5)) * 5 -
    sumToN(Math.floor(num / 15)) * 15
  );
}
