// 1679. Max Number of K-Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maxOperations = function(nums, k) {
//     let i = 0;
//     let count = 0

//     while (i < nums.length) {
//         const x = k - nums[i]
//         const index = nums.slice(i + 1, nums.length).indexOf(x)
//         if (index !== -1) {
//             nums.splice(0, 1)
//             nums.splice(index, 1)
//             count = count + 1
//             i = 0
//         } else {
//             nums.splice(0, 1)
//         }
//     }
//     return count
// };

var maxOperations = function (nums, k) {
  nums = nums.sort((a, b) => a - b);

  let i = 0,
    j = nums.length - 1,
    count = 0;

  while (i < j) {
    if (nums[i] + nums[j] === k) {
      count = count + 1;
      i = i + 1;
      j = j - 1;
    } else if (nums[i] + nums[j] > k) {
      j = j - 1;
    } else if (nums[i] + nums[j] < k) {
      i = i + 1;
    }
  }
  return count;
};

console.log(maxOperations([1, 2, 3, 4], 5));
