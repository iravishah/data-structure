// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    const len = s.length
    let row = 0
    let down = true
    let result = []

    if (numRows == 1) {
        return s
    }

    for (let i = 0; i < numRows; i++) {
        result[i] = ''
    }
    
    for (let i = 0; i < len; i++) {
        result[row] += s[i]

        if (row === 0) {
            down = true
        }

        if (row === numRows - 1) {
            down = false
        }

        down ? row++ : row--
    }

    return result.join('')
};

console.log(convert('AB', 1))