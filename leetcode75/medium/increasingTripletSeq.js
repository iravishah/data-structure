// 334. Increasing Triplet Subsequence
// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Number.MAX_SAFE_INTEGER
    let second = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < first) {
            first = nums[i]
        }

        if (nums[i] > first) {
            second = Math.min(nums[i], second)
        }

        if (nums[i] > second) {
            return true
        }
    }
    return false
};

console.log(increasingTriplet([1, 2, 3, 4, 5]))