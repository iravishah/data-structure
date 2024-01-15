/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    const sLen = s.length
    const tLen = t.length
    
    while (i < tLen && j < sLen) {
        if (t[i] === s[j]) {
            i++;
            j++;
        }

        if (t[i] !== s[j]) {
            i++;
        }
    }

    if (sLen === j) {
        return true
    }
    return false
};

console.log(isSubsequence('axc', 'ahbgdc'))