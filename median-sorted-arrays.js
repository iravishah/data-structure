// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sortedArray = []
    const num1Len = nums1.length
    const num2Len = nums2.length
    let i = 0, j = 0;
    
    while (i < num1Len && j < num2Len) {
        if (nums1[i] > nums2[j]) {
            sortedArray.push(nums2[j])
            j++
        } else {
            sortedArray.push(nums1[i])
            i++
        }
    }
    while (i < num1Len) {
        sortedArray.push(nums1[i])
        i++
    }
    while (j < num2Len) {
        sortedArray.push(nums2[j])
        j++
    }

    const len = sortedArray.length
    const divideBy2 = len / 2

    if (len % 2 === 0) {
        return (sortedArray[divideBy2 - 1] + (sortedArray[divideBy2])) / 2
    }

    return sortedArray[Math.ceil(divideBy2) - 1]
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))