// 643. Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findMaxAverage = function(nums, k) {
//     let i = 0, j = k - 1;
//     let avg = -Number.MAX_SAFE_INTEGER;

//     while (j < nums.length) {
//         let sum = 0;
//         for (let l = i; l <= j; l++) {
//             sum = sum + nums[l]
//         }
//         const interAvg = sum / k
//         if (interAvg > avg) {
//             avg = interAvg
//         }
//         j = j + 1
//         i = i + 1
//     }
//     return avg
// };

var findMaxAverage = function (nums, k) {
  let avg = -Number.MAX_SAFE_INTEGER;
  let i = 0,
    j = 0;
  let sum = 0;

  if (k === 1) {
    return nums[0] / k
  }

  while (i <= nums.length) {
    if (i < k) {
      sum = sum + nums[i];
      i = i + 1;
    } else {
      const iAvg = sum / k;
      avg = iAvg > avg ? iAvg : avg;
      sum = (sum - nums[j]) + nums[i];
      j = j + 1;
      i = i + 1;
    }
  }
  return avg;
};

console.log(findMaxAverage([0,1,1,3,3], 4));
