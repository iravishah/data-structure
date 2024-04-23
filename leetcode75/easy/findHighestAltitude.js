// 1732. Find the Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} gain
 * @return {number}
 */
// var largestAltitude = function (gain) {
//   let prefixSum = 0, max = 0, i = 0;
//   const len = gain.length;
//   while (i < len) {
//     prefixSum += gain[i];
//     max = Math.max(max, prefixSum);
//     i++;
//   }
//   return max;
// };

var largestAltitude = function (gain) {
  let prefixSum = 0,
    i = 0;
  let result = [0];
  const len = gain.length;
  while (i < len) {
    prefixSum += gain[i];
    result.push(prefixSum);
    i++;
  }
  return Math.max.apply(null, result);
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
