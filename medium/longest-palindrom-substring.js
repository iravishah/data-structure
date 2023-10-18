/**
 * Problem statement: Find the longest palindrom sequence frmo the given string
 * Solution: Palindrom means a string which is same if you read from left to right or right to left.
 * So, we will look for left and the right char for every string characters if they are same then store length and intrim string.
 * We have to increment right counter and decrement left counter to process all the characters for a one character
 * When we reach the end of the string we will have substring in the result
 */

function longestPalindromSubstr(str) {
    let res = '';
    let resLen = 0;
    let strLen = str.length
    for (i = 0; i < strLen; i++) {
        let left = i
        let right = i
        while (left >= 0 && right < strLen && str[left] === str[right]) {
            if ((right - left) >= resLen) {
                res = str.substring(left, right + 1)
                resLen = res.length
            }
            left = left - 1
            right = right + 1
        }

        left = i
        right = i + 1

        while (left >= 0 && right < strLen && str[left] === str[right]) {
            if ((right - left) >= resLen) {
                res = str.substring(left, right + 1)
                resLen = res.length
            }
            left = left - 1
            right = right + 1
        }
    }
    
    return res
}

const calculatedStr = longestPalindromSubstr('abbcccbbbcaaccbababcbcabca')
console.log(calculatedStr)