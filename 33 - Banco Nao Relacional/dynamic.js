function bestSum(target, numbers, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let best = null;
  for (let number of numbers) {
    let remainder = target - number;
    let bestNumbers = bestSum(remainder, numbers, memo);
    if (bestNumbers != null) {
      bestNumbers = [number, ...bestNumbers];

      if (best == null || bestNumbers.length < best.length) best = bestNumbers;
    }
  }
  return (memo[target] = best);
}
//7, [2, 3, 4]
//7 - 2 -> 5
//5 - 2 -> 3
//3 - 2 -> 1
//1 - 2 -> -1 -> null
const start = new Date();
console.log(bestSum(7, [2, 3, 4])); //[4, 3]
console.log(bestSum(7, [2, 3, 4, 7])); //[7]
console.log(bestSum(9, [4, 7])); //null
console.log(bestSum(8, [2, 3, 4, 5])); //[5, 3]
console.log(bestSum(100, [2, 3, 4, 5, 10, 15, 25])); //[25, 25, 25, 25]
const getSpendTime = (ticks) => {
  const mili = 1;
  const second = 1000 * mili;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  const totalDays = Math.round(ticks / day);
  const totalHours = Math.round((ticks - totalDays * day) / hour);
  const totalMinutes = Math.round((ticks - totalHours * hour) / minute);
  const totalSeconds = Math.round((ticks - totalMinutes * minute) / second);
  const totalMilliSeconds = Math.round((ticks - totalSeconds * second) / mili);
  return {
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
    totalMilliSeconds,
  };
};
const spendTime = getSpendTime(new Date() - start);

console.log(
  `Spend time:
    ${spendTime.totalDays.toString().padStart(2, "0")}'${spendTime.totalHours
    .toString()
    .padStart(2, "0")}:${spendTime.totalMinutes
    .toString()
    .padStart(2, "0")}:${spendTime.totalSeconds
    .toString()
    .padStart(2, "0")}.${spendTime.totalMilliSeconds
    .toString()
    .padStart(3, "0")}`
);
