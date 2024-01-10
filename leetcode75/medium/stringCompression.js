// https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75
// 443. String Compression

/**
 * @param {character[]} chars
 * @return {number}
 */

// var compress = function(chars) {
//     let result = []
//     let counter = 0
//     let currentChar = chars[0]

//     for (let i = 0; i < chars.length; i++) {
//         if (currentChar === chars[i]) {
//             counter =  counter + 1
//         }
//         if (chars[i + 1] !== currentChar) {
//             if (counter === 1) {
//                 result.push(chars[i])
//             } else if (counter > 1 && counter < 10) {
//                 result.push(chars[i], String(counter))
//             } else {
//                 result.push(chars[i])
//                 result = result.concat(String(counter).split(''))
//             }
//             currentChar = chars[i + 1]
//             counter = 0
//         }
//     }
//     for (let i = 0; i < result.length; i++) {
//         chars[i] = result[i]
//     }
//     return result.length
// };

var compress = function(chars) {
    let result = ''
    let counter = 0
    let currentChar = chars[0]

    for (let i = 0; i < chars.length; i++) {
        if (currentChar === chars[i]) {
            counter =  counter + 1
        }
        if (chars[i + 1] !== currentChar) {
            if (counter === 1) {
                result = result + chars[i]
            } else if (counter > 1 && counter < 10) {
                result = result + chars[i]
                result = result + String(counter)
            } else {
                result = result + chars[i]
                result = result + String(counter)
            }
            currentChar = chars[i + 1]
            counter = 0
        }
    }
    for (let i = 0; i < result.length; i++) {
        chars[i] = result[i]
    }
    return result.length
};

console.log(compress(["a","a","a","b","b","a","a"]));
