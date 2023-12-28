/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0, j = 0
    const sLen = s.length
    const pLen = p.length

    while (i < sLen && j < pLen) {
        if (s[i] === p[j] || p[j] === '.') {
            i = i + 1
            j = j + 1
            continue
        }

        if (p[j] === '*') {
            const charBeforeStar = p[j - 1]
            if (!charBeforeStar || charBeforeStar === '.' || charBeforeStar === s[i]) {
                i = i + 1
            } else {
                j = j + 1
            }
        }

        if (s[i] !== p[j] && p[j + 1] === '*') {
            j = j + 2
            continue
        }

        if (s[i] !== p[j] && (p[j + 1] !== '*' || p[j + 1] !== '.')) {
            j = j + 1
            continue
        }
    }

    while (i == sLen && j < pLen) {
        if (s[i - 1] !== p[j] && p[j + 1] !== '*') {
            break
        }
        if (s[i - 1] === p[j]) {
            j = j + 1
        }

        if (p[j + 1] === '*') {
            j = j + 2
            continue
        }
    }
    
    if (i >= sLen && j >= pLen) {
        return true
    }
    
    if (j < pLen || i < sLen) {
        return false
    }
};

console.log(isMatch('aaa', 'aaaa'))
// console.log(isMatch('aa', 'a*'))
// console.log(isMatch('aa', 'ab'))
// console.log(isMatch('ab', '.*'))
// console.log(isMatch('aaa', 'ab*a*c*a'))
// console.log(isMatch('ab', '.*c'))