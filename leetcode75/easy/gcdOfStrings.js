// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const str1Len = str1.length
    const str2Len = str2.length
    const smallStr = str1Len > str2Len ? str2 : str1
    const smallStrLen = smallStr.length

    for (let i = 0; i < smallStrLen; i++) {
        const divisorStr = smallStr.slice(i, smallStrLen)
        const divisorLen = divisorStr.length
        if (str1Len % divisorLen !== 0 && str2Len % divisorStr !==0) {
            continue
        }
        if (divisorStr.repeat(str1Len / divisorLen) === str1 && divisorStr.repeat(str2Len / divisorLen) === str2) {
            return divisorStr
        }
    }
    return ''
};

console.log(gcdOfStrings('ABABAB', 'ABAB'))