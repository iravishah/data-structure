// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let i = 0, j = s.length - 1
    const vowels = { 'a': true, 'e': true, 'i': true, 'o': true, 'u': true, 'A': true, 'E': true, 'I': true, 'O': true, 'U': true }

    s = s.split('')

    while (i < j) {
        if (!vowels[s[i]]) {
            i++
        }
        if (!vowels[s[j]]) {
            j--
        }
        if (vowels[s[i]] && vowels[s[j]]) {
            const temp = s[i]
            s[i] = s[j]
            s[j] = temp
            i++
            j--
        }
    }
    return s.join('')
};

console.log(reverseVowels("hellow"))