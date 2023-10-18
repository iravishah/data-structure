// https://leetcode.com/problems/string-to-integer-atoi/description/

/**
 * @param {string} s
 * @return {number}
 */

const MAX = Math.pow(2, 31) - 1
const MIN = Math.pow(-2, 31)

var myAtoi = function(s) {
    let sign = ''
    let result = 0
    const len = s.length

    s = s.trim()

    for (let i = 0; i < len; i++) {
        if (!result && (s[i] === '-' || s[i] === '+')) {
            if (sign || i !==0) {
                return 0
            }
            sign = s[i]
            continue
        }
        if (s[i] === ' ') {
            return isNumberFinite(sign, result)
        }
        const num = s[i] - 0

        if (Number.isNaN(num)) {
            return isNumberFinite(sign, result)
        }

        result = result * 10 + num
    }
    return isNumberFinite(sign, result)
};

function isNumberFinite(sign, result) {
    if (sign === '-') {
        result = 0 - result
    }
    if (result > MAX) {
        return MAX
    } else if (result < MIN) {
        return MIN
    } else {
        return result
    }
}

console.log(myAtoi("      -11919730356x"))