// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(' ').filter(x => x)
    return s.reverse().join(' ')
};  

console.log(reverseWords('a good   example'))