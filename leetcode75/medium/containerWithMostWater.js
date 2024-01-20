// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length;
    let maxCapacity = 0;

    while (j > i) {
        const distance = (j - i) - 1;
        const capacity = Math.min(height[i], height[j - 1]) * distance;
        if (capacity > maxCapacity) {
            maxCapacity = capacity;
        }
        if (height[i] > height[j - 1]) {
            j--;
        } else {
            i++;
        }
    }
    return maxCapacity;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))