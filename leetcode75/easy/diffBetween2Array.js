// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75
// 2215. Find the Difference of Two Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
  // Convert arrays to Sets for easy lookup and uniqueness
  const setNums1 = new Set(nums1);
  const setNums2 = new Set(nums2);

  // Find elements in nums1 not in nums2
  const uniqueToNums1 = Array.from(setNums1).filter((n) => !setNums2.has(n));

  // Find elements in nums2 not in nums1
  const uniqueToNums2 = Array.from(setNums2).filter((n) => !setNums1.has(n));

  return [uniqueToNums1, uniqueToNums2];
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
