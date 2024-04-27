// https://leetcode.com/problems/find-pivot-index/?envType=study-plan-v2&envId=leetcode-75
// 724. Find Pivot Index

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0;
  let right = 0;
  let i = 0,
    j = 0;
  let pIndex = -1;
  while (i < nums.length) {
    right += nums[i];
    i++;
  }

  while (j < nums.length) {
    right = right - nums[j];
    if (left === right) {
      pIndex = j;
      break;
    } else {
      left += nums[j];
    }
    j++;
  }
  return pIndex;
};

console.log(pivotIndex([-1, -1, -1, 0, -1, -1]));
