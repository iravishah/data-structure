/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(' ').filter(x => x)
    return s.reverse().join(' ')
};  

console.log(reverseWords('a good   example'))