// 1456. Maximum Number of Vowels in a Substring of Given Length
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let maxVowels = 0;
  let localVowelCount = 0;
  const vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };
  let i = 0,
    j = 0;

  while (j < k) {
    if (vowels[s[j]]) {
      localVowelCount++;
    }
    j++;
  }
  maxVowels = localVowelCount;
  while (j < s.length) {
    if (vowels[s[i]]) {
      localVowelCount -= 1;
    }
    if (vowels[s[j]]) {
      localVowelCount += 1;
    }
    i++;
    j++;
    maxVowels = maxVowels > localVowelCount ? maxVowels : localVowelCount;
  }
  return maxVowels;
};

console.log(
  maxVowels(
    "abciiidef",
    3
  )
);
