// 1493. Longest Subarray of 1's After Deleting One Element
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0,
    right = 0,
    maxDeletedCount = 1;

  while (right < nums.length) {
    if (nums[right] === 0) {
      maxDeletedCount--;
    }

    if (maxDeletedCount < 0) {
      if (nums[left] === 0) {
        maxDeletedCount++;        
      }
      left++;
    }
    right++;
  }
  return right - left - 1;
};

console.log(longestSubarray([1, 1, 1]));
console.log(longestSubarray([0, 0, 0]));
console.log(longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 0, 0, 0, 0]));
