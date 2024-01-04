// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//     let result = []

//     for (let i = 0; i < nums.length; i++) {
//         let prefix = 1, sufix = 1, k = i + 1, j = 0
//         while (j <= i - 1) {
//             prefix *= nums[j]
//             j++
//         }

//         while (k <= nums.length - 1) {
//             sufix *= nums[k]
//             k++
//         }
//         result.push(prefix * sufix)
//     }
//     return result
// };

// var productExceptSelf = function(nums) {
//     let result = []

//     for (let i = 0; i < nums.length; i++) {
//         const prefix = nums.slice(0, i).reduce((a, b)=> a*b, 1)
//         const sufix = nums.slice(i + 1, nums.length).reduce((a, b)=> a*b, 1)

//         result.push(prefix * sufix)
//     }

//     return result
// };

var productExceptSelf = function (nums) {
  let result = [];
  let prefix = 1,
    postfix = 1;
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      result.push(prefix);
    } else {
      result.push(prefix * nums[i - 1]);
      prefix = prefix * nums[i - 1];
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * postfix;
    postfix = postfix * nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
