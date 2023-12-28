// 1768. Merge Strings Alternately

// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let resultStr = '';
    let i = 0, j = 0;
    const worl1Length = word1.length
    const word2Length = word2.length

    while (worl1Length > i && word2Length > j) {
        resultStr += word1[i]
        resultStr += word2[j]
        i++
        j++
    }

    if (worl1Length > i) {
        resultStr += word1.slice(i, word1.length)
    }

    if (word2Length > j) {
        resultStr += word2.slice(j, word2.length)
    }

    return resultStr
};


console.log(mergeAlternately('ab', 'eee'))
