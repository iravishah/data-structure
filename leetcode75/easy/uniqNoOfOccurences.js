// https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75
// 1207. Unique Number of Occurrences
//
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const hash = {};
  let i = 0;

  while (i < arr.length) {
    if (hash[arr[i]]) {
      hash[arr[i]]++;
    } else {
      hash[arr[i]] = 1;
    }
    i++;
  }

  const countArray = Object.values(hash);
  const arrayFromSet = Array.from(new Set(countArray));
  return countArray.length === arrayFromSet.length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));

// CHAT GPT CODE IMPROVEMENT
// function hasUniqueCounts(arr) {
//     const frequencyMap = new Map();
  
//     // Populate frequency map with the count of each element
//     arr.forEach(item => {
//       frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
//     });
  
//     // Create a set from the values of the frequency map to remove duplicates
//     const uniqueCounts = new Set(frequencyMap.values());
  
//     // Compare size of values array to size of unique values set
//     return frequencyMap.size === uniqueCounts.size;
//   }
  