// 1004. Max Consecutive Ones III
// https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var longestOnes = function (nums, k) {
    let left = 0, right = 0, max = 0, numZeros = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            numZeros++;
        }

        while (numZeros > k) {
            if (nums[left] === 0) {
                numZeros--;
            }
            left++;
        }
        const local = right - left + 1;
        max = Math.max(max, local);
        right++;
    }
    return max;
}

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));
