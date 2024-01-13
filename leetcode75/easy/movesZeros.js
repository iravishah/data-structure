/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let i = 0, j = 1;
    const len = nums.length;

    while (j < len) {
        if (nums[i] === 0 && nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            // const temp = nums[j]
            // nums[j] = nums[i]
            // nums[i] = temp
            i++
            j++
        } else if (nums[i] === 0 && nums[j] === 0) {
            j++
        } else if ((nums[i] !== 0 && nums[j] !== 0) || (nums[i] !== 0 && nums[j] === 0)) {
            i++
            j++
        }
    }
    return nums
    
};

console.log(moveZeroes([0,1,0,3,12]))